import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        {
          email,
          password,
        }
      )
      localStorage.setItem('token', response.data.token)
      // Redirect to home page after successful login
      navigate('/prologue')
    } catch (error) {
      console.error('Login error:', error)
      alert(error.response?.data?.message || 'Login failed')
    }
  }

  return (
    <>
      <Header />
      <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
        <h1 className='text-4xl font-bold'>Login</h1>

        <form onSubmit={handleSubmit} className='form min-w-md'>
          <div className='form-content'>
            <label htmlFor='email' className='text-dg-black'>
              Email
            </label>
            <Input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
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
                label='Login'
                className='btn success text-xl'
                onClick={handleSubmit}
              />
              <Link to='/signup' className='btn default w-full text-xl'>
                <div className='inner-btn text-center'>Sign Up</div>
              </Link>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default LoginPage
