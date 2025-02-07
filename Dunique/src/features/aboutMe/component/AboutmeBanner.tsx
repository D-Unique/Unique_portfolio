import aboutmebannerimage  from '/aboutmebannerimage.jpeg'

function AboutmeBanner() {


  return (
      <div className='block h-90 w-full'>
          <div className=' flex h-[100%] w-full justify-center items-center'>
              <div style={{ backgroundImage: `url(${aboutmebannerimage})` }} className=" bg-cover bg-no-repeat h-[40%] w-200 max-xs:h-[65%] max-xs:w-[100%]  ">
          </div>
          </div>
      
    </div>
  )
}

export default AboutmeBanner

