import { FaCheck, FaXmark } from 'react-icons/fa6'
import { Route, Routes } from 'react-router'
import Button from './components/Button'
import Menu from './components/Menu.jsx'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
            <div className='flex items-center justify-center'>
              <Menu />
            </div>
            <div className='flex items-center justify-center gap-4'>
              <Button label='Default' className='btn default' />
              <Button label='Success' className='btn success' />
              <Button label='Error' className='btn error' />
              <Button label='Disabled' className='btn disabled' />
            </div>
            <div className='flex items-center justify-center gap-4'>
              <Button
                label={<FaCheck className='w-4 h-4' />}
                className='btn icon'
              />
              <Button
                label={<FaCheck className='w-4 h-4' />}
                className='btn icon success'
              />
              <Button
                label={<FaXmark className='w-4 h-4' />}
                className='btn icon error'
              />
              <Button
                label={<FaXmark className='w-4 h-4' />}
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
