import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Button from '../components/Button'
import Input from '../components/Input'

function SignupPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/signup',
        {
          email,
          username,
          password,
        }
      )
      localStorage.setItem('token', response.data.token)
      // Redirect to home page after successful signup
      navigate('/')
    } catch (error) {
      console.error('Signup error:', error)
      alert(error.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
      <h1 className='text-4xl font-bold'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='form min-w-md'>
        <div className='form-content'>
          <label htmlFor='email' className='text-dg-black'>
            Email
          </label>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
          />
          <label htmlFor='username' className='text-dg-black'>
            Username
          </label>
          <Input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your username'
          />
          <label htmlFor='password' className='text-dg-black'>
            Password
          </label>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />

          <div className='flex items-center justify-between mt-2'>
            <div className='flex items-center gap-2'>
              <label htmlFor='remember' className='text-sm text-dg-black'>
                Remember me
              </label>
              <input type='checkbox' id='remember' />
            </div>
            <Link to='#' className='text-sm hover:underline text-dg-black'>
              Forgot password?
            </Link>
          </div>

          <div className='flex flex-col justify-center mt-2 gap-2'>
            <Button
              label='Sign Up'
              className='btn success text-xl'
              onClick={handleSubmit}
            />
            <Link to='/login' className='btn default w-full text-xl'>
              <div className='inner-btn text-center'>Log In</div>
            </Link>
          </div>
        </div>
      </form>
    </main>
  )
}

export default SignupPage
