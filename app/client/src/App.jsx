import { FaCheck, FaXmark } from 'react-icons/fa6'
import { Route, Routes } from 'react-router'
import Button from './components/Button'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <main className='container flex flex-col items-center justify-center p-4 mx-auto h-dvh'>
            <div className='flex gap-4 items-center justify-center'>
              <Button label='Click Me' className='btn default' />
              <Button label='Click Me' className='btn success' />
              <Button label='Click Me' className='btn error' />
              <Button label='Click Me' className='btn disabled' />
            </div>
            <div className='flex gap-4 items-center justify-center mt-4'>
              <Button
                label={<FaXmark className='w-4 h-4' />}
                className='btn icon'
              />
              <Button
                label={<FaCheck className='w-4 h-4' />}
                className='btn icon'
              />
            </div>
          </main>
        }
      />
    </Routes>
  )
}

export default App
