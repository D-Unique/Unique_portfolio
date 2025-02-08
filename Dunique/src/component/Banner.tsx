import { Suspense, useEffect } from 'react';
import BannerChangeContant from '../utils/BannerChangeContant';

function Banner() {

  useEffect(() => {
    BannerChangeContant('change')
    }, [])
  
  return (
    <div className=" flex relative w-[100%] h-screen  max-xs:h-[500px] z-[10]" id="banner">
      <div
        style={{ backgroundImage: 'url(/DSC_9035.jpg)'}}
        className=" flex-grow  bg-no-repeat bg-cover h-[160%] w-full max-xs:h-[65%] max-xs:w-[100%]  "
      >
      </div>
        <div className=" absolute top-1/3 left-20 z-10 max-xs:top-1/3 max-xs:left-10 max-xs:z-10  inline-block "> 
          
          <div className="flex space-x-4 flex-row gap-4 z-10 m-10">
            <a href="https://x.com/Dunique314" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 max-xs:w-4 h-8 text-gray-500 z-10" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 max-xs:w-4 h-8 text-gray-500" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 max-xs:w-4 h-8 text-gray-500" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.773.13 4.548.403 3.467 1.484 2.386 2.565 2.113 3.79 2.055 5.07.997 6.35.983 6.774.983 12s.014 5.65.072 6.93c.058 1.28.331 2.505 1.412 3.586 1.081 1.081 2.306 1.354 3.586 1.412 1.28.058 1.704.072 6.93.072s5.65-.014 6.93-.072c1.28-.058 2.505-.331 3.586-1.412 1.081-1.081 1.354-2.306 1.412-3.586.058-1.28.072-1.704.072-6.93s-.014-5.65-.072-6.93c-.058-1.28-.331-2.505-1.412-3.586-1.081-1.081-2.306-1.354-3.586-1.412C15.668.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 max-xs:w-4 h-8 text-gray-500" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.01-.323 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.767.84 1.236 1.91 1.236 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        <div className=" p-5 m-10 col-auto text-[3rem] max-xs:text-[2rem] ">
            <h1 className=" text-white font-bold ">I am Emmanuel&nbsp;Unigwe</h1> 
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        <div  style={{ border: 'solid', display: 'inline-block', padding:'10px 10px 10px 0', borderColor: "#857d83"}} className="border-2 text-[2em] p-20   text-white z-10 max-xs:text-[1em]">
        <h1 id='change' className=' transition-all duration-1000 ease-in-out animate-pulse'></h1>
          </div>
        </Suspense>

      </div>
      
      <div className="hover:bg-amber-700 p-5 m-5 col-auto w-10 h-10 bg-amber-800 max-xs:m-5 flex items-center justify-center z-10 absolute bottom-0 left-20 max-xs:left-[35px] max-xs:bottom-0">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" text-white w-6 h-6 max-xs:w-4 max-xs:h-4" viewBox="0 0 24 24">
              <path d="M12 14.121l-4.243-4.243-1.414 1.414 6.95 6.95 6.95-6.95-1.414-1.414z"/>
            </svg>

      </div>
    

 
      <div className="absolute inset-0 bg-black opacity-90 h-[160%]  max-xs:h-[65%] ">
      </div> {/* Dark overlay */}

      

    </div>
  );
}

export default Banner;
