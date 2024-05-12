import React from 'react'
import { useNavigate } from 'react-router-dom'

function Memecard({ name, img }) {

    const navigate = useNavigate();




    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm mt-5 bottom-4 p-4 border-2 border-red-600">
            <img
                className="object-cover w-full h-48"
                src={img}
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                    {name}
                </h4>

                <button onClick={(e) => navigate(`/edit?url=${img}`)} className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow mt-3">
                    Edit
                </button>
            </div>
        </div>
    )
}

export default Memecard
