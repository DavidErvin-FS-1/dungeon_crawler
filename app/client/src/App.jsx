import { Route, Routes } from 'react-router'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <main className='container mx-auto p-4 flex flex-col items-center justify-center h-screen'>
              <h1 class='text-3xl font-bold underline'>React App</h1>
            </main>
          </div>
        }
      />
    </Routes>
  )
}

export default App
