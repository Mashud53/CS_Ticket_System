import React from 'react';
import bgImg1 from '../../assets/vector1.png'
import bgImg2 from '../../assets/vector2.png'
import bgImg3 from '../../assets/vector.png'
const Banner = () => {
    return (
        <div className='md:flex justify-between items-center gap-4 min-h-64 px-2 lg:px-10'>
            <div className='relative h-full w-full bg-linear-to-r from-[#422AD5] to-[#654ff3] rounded-lg'>
                <div
                    style={{
                        backgroundImage: `url(${bgImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    className='flex overflow-hidden items-center'>
                    <img src={bgImg1} alt=""  />
                    <img src={bgImg3} alt="" />
                   
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                    <p>In-Progress</p>
                    <h3 className='font-bold text-2xl '>0</h3>
                </div>
            </div>


            <div className='relative h-full w-full bg-linear-to-r from-[#02A53B] to-[#025f22] mt-4 md:mt-0 rounded-lg'>
                <div
                    style={{
                        backgroundImage: `url(${bgImg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                    className='flex overflow-hidden items-center'>
                    <img src={bgImg1} alt=""  />
                    <img src={bgImg3} alt="" />
                    
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                    <p>Resolved</p>
                    <h3 className='font-bold text-2xl '>0</h3>
                </div>
            </div>

        </div>
    );
};

export default Banner;