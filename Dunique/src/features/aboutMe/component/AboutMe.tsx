import styled from 'styled-components';
import bannerImage from "/DSC_9035.jpg";
import { useInView } from 'react-intersection-observer';
import AboutmeBanner from './AboutmeBanner';


function AboutMe() {


  const thraesholdList = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
  const { ref, inView, entry} = useInView({ threshold: thraesholdList});
  if (inView && entry) {
      (entry.target as HTMLElement).style.transform = `scale(${entry.intersectionRatio})`;
      (entry.target as HTMLElement).style.opacity = `${entry.intersectionRatio}`;
    }
  const Container = styled.div`
    column-count: 2;
    column-gap: 50px; /* Default column gap */

    @media (max-width: 416px) { /* Tailwind's max-xs breakpoint */
        column-gap: 0px; /* Increased column gap for smaller screens */
        column-count: 2;
        

    }
   
`;
  
const Paragraph = styled.div`
  
  font-size: 1rem;
  color: #818189;
  padding-right: 10px;
@media (max-width: 416px) { /* Tailwind's max-xs breakpoint */
   padding-right: 2px;
    font-size: 9px; 
    height: 190px;
#
    ::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
    height: 12px; /* Height of the scrollbar */
}

::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background of the scrollbar track */
}

::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded corners for the thumb */
}

::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb during hover */

  
}


`;

    
  return (
    <section id='#about' className=' flex flex-col gap-52  max-xs:flex  max-xs:flex-col max-xs:gap-[50px]'>
      <section id="aboutmain" style={{ marginTop: '40px'}}  className=" flex flex-col h-screen w-[100%] text-white  gap-30 max-xs:h-[100%] max-xs:w-[100%] max-xs:gap-20">
        <div className="flex  justify-center items-end  h-500 text-4xl font-bold mx-auto my-40 p-40 max-xs:h-[90%] max-xs:my-20 max-xs:p-20">
          <h2 >About Me</h2>
        </div>
        
        <div className=' flex-row  gap-40 items-center justify-center flex h-[90%] w-[100%] mx-auto max-sm:flex-row max-xs:h-[100%] max-xs:w-[100%] max-xs:gap-5 '>
  
          <div ref={ref} className=" relative flex flax-col items-center justify-end w-[40%] h-full max-xs:h-[80] max-xs:w-[100%] , max-xs:flex-col max-xs:items-center max-xs:justify-end max-xs:gap-5">
          <div className="absolute inset-0 bg-black opacity-85 h-150  z-11 max-xs:h-70"></div>
{/*             
            <div className="absolute inset-0 bg-[gray] opacity-30 h-150 z-1"></div> */}
            <img src={bannerImage} width="70%" alt="banner" className=" object-cover z-10 max-xs:w-[94%]" />
            <div className="min-sm:hidden z-20">
              <Container>
                <dt className='text-2xl text-amber-600 max-xs:text-sm'>Name:</dt>
                <dd className='text-lg max-xs:text-xs'>Dunique</dd>
                <dt className='text-2xl text-amber-600 max-xs:text-sm'>Email:</dt>
                <dd className='text-lg max-xs:text-xs'>emmunigwe<br/>@gmail.com</dd>
                <dt className='text-2xl text-amber-600 max-xs:text-sm'>Phone:</dt>
                <dd className='text-lg max-xs:text-xs'>+2347031480599</dd>
                <dt className='text-2xl text-amber-600 max-xs:text-sm'>Address:</dt>
                <dd className='text-lg max-xs:text-xs'>Lagos, Nigeria</dd>
            
              </Container>
            </div>
              
          </div>
          <div  className="flex flex-col justify-center  items-start gap-10 text-white w-[50%] h-50 max-xs:h-[100%]  max-xs:w-[100%] max-xs:text-xs max-xs:flex-col max-xs:items-start  max-xs:justify-end max-xs:gap-5 ">
            <div style={{border: " solid 2px #857d83" , padding: "0.5em"}} className=' text-2xl font-bold x-xs:text-lg'>
              <h3 className=" text-4xl font-bold transition-all duration-1000 ease-in-out animate-pulse max-xs:text-2xl ">Hi<br/> There</h3>
              </div>
            <div  className="w-[90%] flex items-start justify-start">
            <Paragraph >
             I am a Dedicated Software Engineer with a passion for driving innovation and solving
 complex challenges within the healthcare industry. Seeking to leverage my
 technical expertise and strong organizational skills to contribute to the
 development of cutting-edge healthcare solutions. Committed to continuous
 learning and growth, I am eager to join a dynamic team and make a meaningful
 impact on patient care. Additionally, I am passionate about sharing my knowledge
 and mentoring others, and I am interested in exploring opportunities to teach or
              contribute to educational initiatives within the field of software engineering.
              </Paragraph>
              </div>
            


            <div className="max-xs:hidden">
              <Container>
                <dt className='text-2xl text-amber-800 max-xs:text-lg'>Name:</dt>
                <dd className='text-lg max-xs:text-sm'>Dunique</dd>
                <dt className='text-2xl text-amber-800 max-xs:text-lg'>Email:</dt>
                <dd className='text-lg max-xs:text-sm'>emmunigwe@gmail.com</dd>
                <dt className='text-2xl text-amber-800 max-xs:text-lg'>Phone:</dt>
                <dd className='text-lg max-xs:text-sm'>+234 703 148 0599</dd>
                <dt className='text-2xl text-amber-800 max-xs:text-lg'>Address:</dt>
                <dd className='text-lg max-xs:text-sm'>Lagos, Nigeria</dd>
            
              </Container>
            </div>
            <div className='max-xs:flex max-xs:flex-col max-xs:items-center max-xs:justify-center max-xs:gap-5 max-xs:h-20 max-xs:w-full'>
            <div className='w-full  max-xs:h-[60px]'>
              <div className='block h-10 w-[80%] text-[#818189] max-xs:h-5'>
                <hr />
              </div>
              <div className='flex items-center justify- flex-row gap-5 w-100  max-xs:flex-row max-xs:gap-2 max-xs:w-[100%]'>
              <a className='w-[45%] flex items-center justify-center flex-row gap-5 bg-amber-600  hover:bg-amber-800 hover:text-black focus:bg-amber-800  focus:text-black max-xs:text-[7px] max-xs:w-[80%]'>
                <button className=" text-white p-2 rounded-md h-10 w-full max-xs:p-1  max-xs:h-5 ">CONTACT ME&nbsp;→</button>
                </a>
                <div style={{ border: 'solid', borderColor: "#fff" }} className='w-[45%] flex items-center justify-center flex-row gap-5 bg-black border-1 border-white hover:bg-white hover:text-black focus:bg-white focus:text-black max-xs:w-[80%] '>
                  <a href="../EmmanuelResume.pdf" 
            download="EmmanuelResume.pdf"  className='max-xs:text-[7px] max-xs:w-[100%]'>
              <button className=" text-white p-2 rounded-md h-9 w-full max-xs:p-1 max-xs:text-xs  hover:bg-white hover:text-black focus:bg-white focus:text-black max-xs:h-3">DOWNLOAD CV&nbsp;→</button></a>
                </div>
                </div>
            </div>
            </div>
          </div>
      
        </div>

        <div className=' relative flex h-full'>
        <div className="hover:bg-amber-700 p-5 m-5 col-auto w-10 h-10 bg-amber-800 max-xs:m-5 flex items-center justify-center z-10 absolute bottom-0 left-20 max-xs:left-[35px] max-xs:bottom-0">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" text-white w-6 h-6 max-xs:w-4 max-xs:h-4" viewBox="0 0 24 24">
              <path d="M12 14.121l-4.243-4.243-1.414 1.414 6.95 6.95 6.95-6.95-1.414-1.414z"/>
            </svg>

          </div>
          </div>
      </section>
      <AboutmeBanner />
      </ section>
  )
}

export default AboutMe
