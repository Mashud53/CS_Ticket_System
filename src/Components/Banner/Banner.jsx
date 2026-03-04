import React from 'react';
import bgImg1 from '../../assets/vector1.png'
import bgImg2 from '../../assets/vector2.png'
const Banner = () => {
    return (
        <div className='md:flex justify-between items-center gap-4'>
            <div
                className="min-h-screen"
                 style={{
    backgroundImage: `
      linear-gradient(to right, rgba(66,42,213,0.85), rgba(109,91,255,0.85)),
      url(${bgImg1}),
      url(${bgImg2})
    `,
    backgroundSize: "cover, contain, cover",
    backgroundPosition: "center, left, right",
    backgroundRepeat: "no-repeat"
  }}
            >
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">

                        <button className="">Get Started</button>
                    </div>
                </div>
            </div>

             <div
                className="min-h-screen mt-6 md:mt-0"
                 style={{
    backgroundImage: `
      linear-gradient(to right, rgba(66,42,213,0.85), rgba(109,91,255,0.85)),
      url(${bgImg1}),
      url(${bgImg2})
    `,
    backgroundSize: "cover, contain, cover",
    backgroundPosition: "center, left, right",
    backgroundRepeat: "no-repeat"
  }}
            >
                {/* <div className="hero-overlay"></div> */}
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">

                        <button className="">2</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;