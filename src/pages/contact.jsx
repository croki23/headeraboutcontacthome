import React from 'react'
import Header from '../component/header'

const Contact = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="bg-gray-900 text-white text-center min-h-screen flex flex-col justify-center items-center">
                <p className="text-4xl font-bold mb-4">Contact Us</p>
                <p className="text-lg mb-8">Have a question or need assistance? Feel free to reach out to us! We're here to help.</p>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
