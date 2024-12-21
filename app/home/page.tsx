import React from 'react'

const page = () => {
    return (
        <div className='w-full text-black'>
            {/* Hero Section  */}
            <div className="flex justify-center items-center text-5xl text-center font-extrabold">Fertilization Prediction <br></br> that works</div>
            <div className="mb-10 mt-20 w-[30%] mx-auto justify-center items-center text-xl text-center font-normal"><span className='text-green-300'>Smart Farming</span>, Smarter Yields: Precision
                Fertilizer Predictions for Every Acre.</div>
            {/* Bottom Padding Here */}
            <div className="pb-20 w-fit mx-auto"> <button className="justify-center items-center bg-green-700 text-white text-xl font-medium py-2 px-5 rounded-lg hover:bg-green-600">
                Get Started!
            </button>
            </div>

            {/* What we Doin'  */}
            <div className="pt-32 bg-gray-200 mx-auto flex flex-col justify-center items-center text-xl text-center">
                {/* Add Font  */}
                <span className='text-green-300 '>What We Do</span> 
                <span className='mb-44 font-bold text-4xl'> Currently we are</span>

                {/* Three Musketers  */}

            </div>
        </div>
    )
}

export default page
