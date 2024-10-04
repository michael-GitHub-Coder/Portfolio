import React from 'react';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import myData from '../data.json'
import { FaDiagramNext } from 'react-icons/fa6';

const Hero = () => {

    return (
        <div className="h-auto bg-gray-100 flex justify-center items-center">
            <div className="grid grid-cols-1 mb-40 mt-20 md:mt-[120px]">
                <div className="container mx-auto max-w-3xl h-auto bg-white rounded-3xl">
                    <div className="text-center py-4"> 
                        <h1 className="inline-block text-2xl font-bold border-b-2 border-gray-400 hover:text-gray-400 hover:border-black">My Work</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center py-7 mx-4">
                        
                        {myData.data.map((item, index) => (
                            <Link to={`/ShowInfo/${item.id}`} >
                                <div key={index} className="grid grid-cols-1 text-center hover:shadow-lg py-10 rounded-3xl ">
                                    <div className="flex justify-center">
                                        <a href={item.url}><img src={item.image} className="h-40 w-50 object-cover" alt={item.title} /></a>
                                    </div>
                                    <h1 className="py-5 text-gray-400 font-semibold">{item.title}</h1>
                                    <div className="flex justify-center text-gray-400 gap-4">
                                        {/* <FaGithub size={30} className="cursor-pointer hover:text-black" />
                                        <FaLinkedin size={30} className="cursor-pointer hover:text-black" /> */}
                                    <FaArrowRight />
                                    </div>
                                </div>
                            </Link>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
