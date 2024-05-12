// import { ArrowUpRight } from 'lucide-react'
import React from 'react'


export default function Hero() {
    return (
        <div className='flex justify-center items-center'>
            <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row mt-5 p-5 bg-slate-100">
                {/* <div className="h-full w-full md:h-[200px] md:w-[300px]">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt="Laptop"
                        className="h-full w-full rounded-md object-cover"
                    />
                </div> */}
                <div>
                    <div className="p-4">
                        <h1 className="inline-flex items-center text-lg font-semibold">
                            Description
                        </h1>
                        <p className="mt-3 text-sm text-gray-600">
                            This project aims to create a secure and scalable authentication system using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Redux for state management and JSON Web Tokens (JWT) for authentication middleware.
                        </p>
                        <div className="mt-4">
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-900 cursor-pointer">
                                Sign In
                            </span>
                            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-900 cursor-pointer">
                                Sing Up
                            </span>
                        </div>
                        {/* <div className="mt-3 flex items-center space-x-2">
                            <img
                                className="inline-block h-8 w-8 rounded-full"
                                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                alt="Dan_Abromov"
                            />
                            <span className="flex flex-col">
                                <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
                                <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
