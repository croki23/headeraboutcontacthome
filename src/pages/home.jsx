import React from 'react'
import Header from '../component/header'

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-gray-900 text-white text-center min-h-screen flex flex-col justify-center items-center">
                <p className="text-4xl font-bold mb-4">Welcome to Our Website</p>
                <p className="text-lg mb-8">We are dedicated to providing you with the best experience possible. Explore our services and products to see how we can help you achieve your goals.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Explore Now</button>
            </div>
        </div>
    )
}

export default Home
