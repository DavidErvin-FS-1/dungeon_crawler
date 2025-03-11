import { FaCheck, FaXmark } from 'react-icons/fa6'
import { Route, Routes } from 'react-router'
import Button from './components/Button'
import Menu from './components/Menu/index.jsx'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <main className='container flex flex-col items-center justify-center p-4 mx-auto h-dvh gap-4'>
            <div className='flex items-center justify-center'>
              <Menu />
            </div>
            <div className='flex gap-4 items-center justify-center'>
              <Button label='Click Me' className='btn default' />
              <Button label='Click Me' className='btn success' />
              <Button label='Click Me' className='btn error' />
              <Button label='Click Me' className='btn disabled' />
            </div>
            <div className='flex gap-4 items-center justify-center'>
              <Button
                label={<FaXmark className='w-4 h-4' />}
                className='btn icon'
              />
              <Button
                label={<FaCheck className='w-4 h-4' />}
                className='btn icon success'
              />
              <Button
                label={<FaCheck className='w-4 h-4' />}
                className='btn icon error'
              />
              <Button
                label={<FaCheck className='w-4 h-4' />}
                className='btn icon disabled'
              />
            </div>
          </main>
        }
      />
    </Routes>
  )
}

export default App
