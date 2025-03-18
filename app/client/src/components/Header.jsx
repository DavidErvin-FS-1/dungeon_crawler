import { Link } from 'react-router'
import Button from './Button'
import Menu from './Menu'

function Header() {
  const token = localStorage.getItem('token')
  if (!token) {
    return (
      <header className='fixed top-0 left-0 w-screen h-16 bg-dg-black text-white flex items-center justify-between px-4 z-10'>
        <Link to='/' className='text-xl font-bold'>
          Dungeon Crawler
        </Link>
        <div className='flex items-center gap-2'>
          <Link to='/login'>
            <Button label='Log In' className='btn default min-w-20' />
          </Link>
          <Link to='/signup'>
            <Button label='Sign Up' className='btn default min-w-20' />
          </Link>
        </div>
      </header>
    )
  }

  return (
    <header className='fixed top-0 left-0 w-screen h-16 bg-dg-black text-white flex items-center justify-between px-4 z-10'>
      <div className='text-xl font-bold'>Dungeon Crawler</div>
      <Menu />
    </header>
  )
}

export default Header
