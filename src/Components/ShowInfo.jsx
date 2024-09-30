import React from 'react'
import DATA from '../data.json'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { GaugeComponent } from 'react-gauge-component';
const ShowInfo = () => {

    const {id} = useParams();
    console.log(id);

  return (
    <div className="h-auto bg-gray-100 px-5 flex justify-center items-center pt-10">
        <div className="grid grid-cols-1 mb-40 mt-20 md:mt-[120px]">
            <div className="container mx-auto min-w-3xl h-auto bg-white rounded-tl-3xl rounded-br-3xl">
                {DATA.data.map(data=>(
                    id == data.id && 
                    <div key={data.id} className="grid grid-cols-1 lg:flex px-5 py-5 gap-5">
                        <img src={data.image} className="h-80 lg:h-[400px]"/>
                        <div className="relative h-[200px] lg:h-auto">
                            <h1 className="font-semibold ">{data.title}</h1>
                            <h1 className="font-semibold pt-5">Description</h1>
                            <p  className="text-gray-400">{data.Description}</p>
                            <h1 className="font-semibold pt-5">Technologsies used</h1>
                            <p className="text-gray-400">{data.Tools}</p>
                            <GaugeComponent  />
                            <div className="flex gap-5 absolute bottom-1 lg:bottom-5">
                                <Link to={data.url}><button className="bg-green-500 hover:bg-green-700 px-5 py-1 rounded-tl-lg rounded-br-lg text-white">Live</button></Link>
                                <Link to={data['git-url']}><button className="bg-gray-400 hover:bg-gray-600 px-5 py-1 rounded-tl-lg rounded-br-lg text-white">GitHub</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ShowInfo