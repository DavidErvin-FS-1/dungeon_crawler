import { useState } from 'react'
import Button from '../components/Button'

function AllocateStatsPage({ initialPoints = 10 }) {
  const [stats, setStats] = useState({
    strength: 8,
    dexterity: 8,
    intelligence: 8,
    constitution: 8,
    wisdom: 8,
    charisma: 8,
  })
  const [remainingPoints, setRemainingPoints] = useState(initialPoints)

  const handleIncrement = (stat) => {
    if (remainingPoints > 0) {
      setStats((prev) => ({ ...prev, [stat]: prev[stat] + 1 }))
      setRemainingPoints((prev) => prev - 1)
    }
  }

  const handleDecrement = (stat) => {
    if (stats[stat] > 0) {
      setStats((prev) => ({ ...prev, [stat]: prev[stat] - 1 }))
      setRemainingPoints((prev) => prev + 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main className='container flex flex-col items-center justify-center gap-4 p-4 mx-auto h-dvh'>
      <h1 className='text-4xl font-bold'>Allocate Stats</h1>
      <form className='form min-w-md' onSubmit={handleSubmit}>
        <div className='form-content items-center'>
          {[
            'strength',
            'dexterity',
            'constitution',
            'intelligence',
            'wisdom',
            'charisma',
          ].map((stat) => (
            <div
              key={stat}
              className='stat grid grid-cols-2 items-center gap-4 mb-2'
            >
              <span className='capitalize text-dg-black'>
                {stat}: {stats[stat]}
              </span>
              <div className='flex items-center gap-2'>
                <Button
                  label='+'
                  onClick={() => handleIncrement(stat)}
                  className='btn success'
                />
                <Button
                  label='-'
                  onClick={() => handleDecrement(stat)}
                  className='btn error'
                />
              </div>
            </div>
          ))}
          <p className='mt-2 text-dg-black'>
            Remaining Points: {remainingPoints}
          </p>
          <Button label='Allocate Stats' className='btn default mt-4' />
        </div>
      </form>
    </main>
  )
}

export default AllocateStatsPage
