import ServiceCard from './ServiceCard';



function Service() {
    const names = ["web design", "web development", "mobile app development"];
  return (
      <div id="service" className="grid grid-rows-2 text-white w-full h-screen z-30 p-[20px] text-4xl  font-bold max-xs:flex max-xs:flex-col max-xs:text-2xl max-xs:my-100 max-xs:w-full max-xs:h-full  " >
          <h2  className='my-100 text-white h-20 z-30 flex justify-center items-center row-span-3  max-xs:flex max-xs:justify-center max-xs:items-center max-xs:my-100 '>My Services</h2>


          <div style={{ margin: 'auto' }}  className="flex flex-col z-30 gap-[122px] w-[88%] h-full p-[200px] text-lg mx-auto max-xs:gap-[100px] max-xs:text-xs">

              <div className="fservice-row1 flex  flex-1 justify-between gap-18 text-center p-[200px] max-xs:gap-[10px]">
                  

                  {names.map((item) => {
                        return (
                            <ServiceCard name={item} />
                        )
                  })}
                  
                  
                  
              

              </div>
              <div className="fservice-row2  flex justify-between gap-20 text-center max-xs:gap-[10px] ">
              {names.map((item) => {
                        return (
                            <ServiceCard name={item} />
                        )
                  })}
                  
                  
                  
              </div>
          </div>
         
      </div>
  )
}

export default Service

