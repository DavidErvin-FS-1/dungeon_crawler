import { useEffect, useRef, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6'
import Button from '../Button'

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className='relative'>
      <Button
        label={
          <div className='flex items-center justify-center gap-1 btn'>
            Menu <FaCaretDown />
          </div>
        }
        className='btn menu'
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup='true'
        aria-expanded={isMenuOpen}
      />

      {isMenuOpen && (
        <ul className='absolute bg-[#d9d9d9] shadow-[0_4px_#adadad] transition-shadow w-64 p-1 rounded-md mt-1 flex flex-col items-center justify-center gap-1'>
          <li className='w-full h-full px-2 py-1 font-bold rounded-md inset-ring inset-ring-black/15 bg-[#adadad]/25 text-dg-black hover:bg-[#adadad]/50'>
            Item 1
          </li>
          <li className='w-full h-full px-2 py-1 font-bold rounded-md inset-ring inset-ring-black/15 bg-[#adadad]/25 text-dg-black hover:bg-[#adadad]/50'>
            Item 2
          </li>
          <li className='w-full h-full px-2 py-1 font-bold rounded-md inset-ring inset-ring-black/15 bg-[#adadad]/25 text-dg-black hover:bg-[#adadad]/50'>
            Item 3
          </li>
        </ul>
      )}
    </div>
  )
}

export default Menu
