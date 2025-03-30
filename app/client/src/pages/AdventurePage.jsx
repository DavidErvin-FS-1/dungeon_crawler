import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/Button'
import Header from '../components/Header'

function AdventurePage() {
  const [currentNode, setCurrentNode] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }

    // Fetch the adventure story tree from the API
    axios
      .get('http://localhost:3001/api/adventure', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCurrentNode(response.data.story)
      })
      .catch((error) => {
        console.error('Error fetching adventure story:', error)
        alert(
          error.response?.data?.message || 'Failed to load the adventure story.'
        )
      })
  }, [navigate])

  const handleDecision = (decision) => {
    if (currentNode && currentNode[decision]) {
      setCurrentNode(currentNode[decision])
    } else {
      alert('The adventure ends here. Thanks for playing!')
      navigate('/')
    }
  }

  if (!currentNode) {
    return (
      <>
        <Header />
        <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
          <p className='text-xl'>Loading your adventure...</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
        <div className='story text-center'>
          <p className='text-xl whitespace-pre-line'>{currentNode.text}</p>
          <div className='decision-buttons flex gap-4 mt-4'>
            {currentNode.yes && (
              <Button
                label='Yes'
                className='btn success text-xl'
                onClick={() => handleDecision('yes')}
              />
            )}
            {currentNode.no && (
              <Button
                label='No'
                className='btn default text-xl'
                onClick={() => handleDecision('no')}
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default AdventurePage
