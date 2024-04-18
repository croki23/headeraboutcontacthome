import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <div className='container mx-auto p-4 flex justify-center items-center'>
                <div className='flex gap-4'>
                    <Link to={'/home'} className='hover:text-gray-400'>Home</Link>
                    <Link to={'/about'} className='hover:text-gray-400'>About</Link>
                    <Link to={'/contact'} className='hover:text-gray-400'>Contact</Link>
                </div>
                {/* Add your logo or other content here */}
            </div>
        </div>
    )
}

export default Header
