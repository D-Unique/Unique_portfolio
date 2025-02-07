import aboutmebannerimage  from '/aboutmebannerimage.jpeg'

function AboutmeBanner() {


  return (
      <div className='relative block h-90 w-full max-xs:h-[80vh] max-xs:w-[100%] max-xs:flex max-xs:items-start max-xs:justify-center'>
      <div className=' flex h-[100%] w-full justify-center items-center max-xs:flex-col max-xs:items-center max-xs:justify-end max-xs:h-[35%] max-xs:w-[100%]'>
      <div className="absolute inset-0 bg-black opacity-85 h-65  z-11 max-xs:h-30 max-xs:top-40"></div>
        
              <div style={{ backgroundImage: `url(${aboutmebannerimage})` }} className=" bg-cover bg-no-repeat h-[40%] w-200 max-xs:h-[20%] max-xs:w-[50%] max-xs:object-cover  max-xs:bg-cover max-xs:bg-no-repeat ">
          </div>
          </div>
      
    </div>
  )
}

export default AboutmeBanner

