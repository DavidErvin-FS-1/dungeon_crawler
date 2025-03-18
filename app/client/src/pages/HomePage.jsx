import { Link } from 'react-router'
import Button from '../components/Button'
import Header from '../components/Header'

function HomePage() {
  return (
    <>
      <Header />
      <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
        <h1 className='text-4xl text-center font-bold'>
          Welcome to Dungeon Crawler!
        </h1>
        <p className='text-lg text-center max-w-sm'>
          An online Dungeon Crawler game you can play anywhere, anytime, and on
          any device!
        </p>
        <p className='text-lg text-center px-1.5 flex flex-col items-center justify-center gap-4 mt-4'>
          <Link to='/login'>
            <Button
              label='Continue Your Adventure'
              className='btn success min-w-xs text-2xl'
            />
          </Link>
          <Link to='/signup'>
            <Button
              label='Start New Adventure'
              className='btn default min-w-xs text-2xl'
            />
          </Link>
        </p>
      </main>
    </>
  )
}

export default HomePage
