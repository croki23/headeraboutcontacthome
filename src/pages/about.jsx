import React from 'react';
import Header from '../component/header';
import LokiProfileImage from '../assets/Loki_Profile.webp';

const About = () => {
    return (
        <div>
            <Header />
            <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center py-8">
                <div className="max-w-3xl mx-auto">
                    <p className="text-4xl font-bold mb-4">About Us</p>
                    <p className="text-lg mb-8">At our company, we strive to deliver exceptional products and services to our customers. With years of experience and dedication, we are committed to meeting your needs and exceeding your expectations.</p>
                    <img src={LokiProfileImage} alt="About" className="rounded-lg shadow-lg mb-8" style={{ maxWidth: "100%" }} />
                    <p className="text-lg">For inquiries or to learn more about us, feel free to contact us.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
