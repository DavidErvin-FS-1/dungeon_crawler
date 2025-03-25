import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/Button'
import Header from '../components/Header'

function ProloguePage() {
  const [storySegments, setStorySegments] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  // Fetch prologue from the server on mount
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      // If no token, redirect to login
      navigate('/login')
      return
    }

    axios
      .get('http://localhost:3001/api/prologue', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setStorySegments(response.data.story)
      })
      .catch((error) => {
        console.error('Error fetching prologue:', error)
        alert('Could not load prologue. Please try again.')
      })
  }, [navigate])

  // Handler to advance the story
  const handleNext = useCallback(() => {
    if (currentIndex < storySegments.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      // End of story: navigate to next page (e.g., game start or allocate stats)
      navigate('/allocate-stats')
    }
  }, [currentIndex, storySegments, navigate])

  // Listen for "Enter" key press to advance the story
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext])

  return (
    <>
      <Header />
      <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
        {storySegments.length > 0 ? (
          <div className='prologue text-center'>
            <p className='text-xl'>{storySegments[currentIndex]}</p>
            <Button
              label='Continue'
              className='btn default text-xl mt-4'
              onClick={handleNext}
            />
          </div>
        ) : (
          <p>Loading prologue...</p>
        )}
      </main>
    </>
  )
}

export default ProloguePage
