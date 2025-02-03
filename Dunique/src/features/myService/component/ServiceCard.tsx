import { ServiceCardProps } from "../enum";
import { useInView } from "react-intersection-observer";

  
function ServiceCard({ name }: ServiceCardProps) {
    const thraesholdList = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
      const { ref, inView, entry} = useInView({ threshold: thraesholdList});
      if (inView && entry) {
          (entry.target as HTMLElement).style.transform = `scale(${entry.intersectionRatio})`;
          (entry.target as HTMLElement).style.opacity = `${entry.intersectionRatio}`;
        }
    return (
        <div ref={ ref} id="servicecard" className=" text-lg flex flex-col flex-1 gap-7 h-[200px] w-[200px] bg-[rgba(255,255,255,0.1)] backdrop-blur-md text-white rounded-md shadow-lg p-[200px]  m-[200px] items-start justify-start transition ease-in-out hover:bg-indigo-500 focus:bg-indigo-500  group max-xs:text-xs max-xs:max-h-[300px] max-xs:w-[100px] max-xs:p-[100px] max-xs:m-[100px] max-xs:gap-3 ">


            
            <div className="flex items-center justify-center w-10 h-12 transition delay-150 duration-1000 ease-in-out group-hover:-translate-y-3 group-focus:-translate-y-3 ">
              <svg  className="fill-current text-amber-600 " xmlns="http://www.w3.org/2000/svg" width="" height=""  viewBox="0 0 150 150" > <path d="M114 15.25H14A9.761 9.761 0 0 0 4.25 25v77A10.762 10.762 0 0 0 15 112.75h98A10.762 10.762 0 0 0 123.75 102V25a9.761 9.761 0 0 0-9.75-9.75zm6.25 9.75v11.683H52.888L61.37 18.75H114a6.257 6.257 0 0 1 6.25 6.25zM14 18.75h43.5l-8.484 17.933H7.75V25A6.257 6.257 0 0 1 14 18.75zm99 90.5H15A7.258 7.258 0 0 1 7.75 102V40.183h112.5V102a7.258 7.258 0 0 1-7.25 7.25z"/><path d="M21.57 33.466a5.75 5.75 0 1 0-5.75-5.75 5.756 5.756 0 0 0 5.75 5.75zm0-8a2.25 2.25 0 1 1-2.25 2.25 2.253 2.253 0 0 1 2.25-2.25zM37.626 33.466a5.75 5.75 0 1 0-5.75-5.75 5.756 5.756 0 0 0 5.75 5.75zm0-8a2.25 2.25 0 1 1-2.25 2.25 2.253 2.253 0 0 1 2.25-2.25zM67.522 29.466h44.745a1.75 1.75 0 0 0 0-3.5H67.522a1.75 1.75 0 0 0 0 3.5zM110.067 50.966h-48a1.751 1.751 0 0 0-1.75 1.75v11a1.75 1.75 0 0 0 1.75 1.75h48a1.749 1.749 0 0 0 1.75-1.75v-11a1.75 1.75 0 0 0-1.75-1.75zm-1.75 11h-44.5v-7.5h44.5zM51.651 52.4c-.01-.055-.026-.106-.041-.159a1.693 1.693 0 0 0-.052-.167 1.566 1.566 0 0 0-.071-.149 2.955 2.955 0 0 0-.083-.154 1.622 1.622 0 0 0-.1-.132c-.036-.046-.07-.092-.11-.134a1.64 1.64 0 0 0-.139-.124c-.032-.027-.059-.059-.094-.084l-.027-.016a1.753 1.753 0 0 0-.168-.1c-.045-.024-.087-.052-.133-.072s-.108-.037-.163-.055a1.556 1.556 0 0 0-.164-.051c-.048-.011-.1-.013-.148-.02-.065-.008-.13-.018-.2-.02h-32.06a1.693 1.693 0 0 0-.212.022c-.044.006-.089.008-.132.017a1.715 1.715 0 0 0-.181.056c-.049.017-.1.03-.146.05s-.093.05-.14.076a1.774 1.774 0 0 0-.163.095c-.008.006-.018.009-.027.016-.035.025-.062.057-.094.084a1.626 1.626 0 0 0-.138.124 1.578 1.578 0 0 0-.111.134 1.409 1.409 0 0 0-.1.132 1.649 1.649 0 0 0-.084.154 1.566 1.566 0 0 0-.071.149c-.021.055-.036.111-.052.167s-.031.1-.041.159a1.833 1.833 0 0 0-.02.2c0 .039-.011.077-.011.116v44c0 .04.009.077.011.116a1.851 1.851 0 0 0 .02.2c.01.054.026.106.041.159s.031.112.052.167a1.566 1.566 0 0 0 .071.149c.026.052.052.1.083.154s.065.089.1.132a1.578 1.578 0 0 0 .111.134 1.615 1.615 0 0 0 .138.123c.032.028.059.059.094.085l.021.01a1.749 1.749 0 0 0 .431.219c.034.012.067.022.1.032a1.789 1.789 0 0 0 .471.073h32.018a1.789 1.789 0 0 0 .471-.073c.035-.01.068-.02.1-.032a1.749 1.749 0 0 0 .431-.219c.007 0 .015-.006.021-.01.035-.026.062-.057.094-.085a1.628 1.628 0 0 0 .139-.123c.04-.042.074-.088.11-.134s.069-.086.1-.132.057-.1.083-.154a1.566 1.566 0 0 0 .071-.149 1.693 1.693 0 0 0 .052-.167c.015-.053.031-.105.041-.159a1.623 1.623 0 0 0 .02-.2c0-.039.012-.076.012-.116v-44c0-.039-.009-.077-.012-.116a1.607 1.607 0 0 0-.019-.198zm-31.968 5.7 12.085 16.616-12.085 16.618zm1.686-3.632H46.5L33.933 71.741zm12.564 23.224L46.5 94.966H21.369zm2.167-2.976L48.183 58.1v33.234zM110.067 72.966h-48a1.75 1.75 0 1 0 0 3.5h48a1.75 1.75 0 0 0 0-3.5zM110.067 83.966h-48a1.75 1.75 0 1 0 0 3.5h48a1.75 1.75 0 0 0 0-3.5zM110.067 94.966h-48a1.75 1.75 0 1 0 0 3.5h48a1.75 1.75 0 0 0 0-3.5z"/></svg>
            </div>
            <div className="group-hover:-translate-y-3 delay-150 duration-1000 max-xs:text-[10px] max-xs:flex max-xs:flex-nowrap ">
                <h2 className="">{name}</h2>
            </div>
            <div  className="text-sm  text-start group-hover:-translate-y-3 delay-150 duration-1000  max-xs:text-[8px] ">
                <p>Duis molestie enim mattis gravida viverra.
                  Fusce ut eros augue. Sed id mauris vel neque</p>
            </div>
  
            <div>
            <span className=" hidden text-sm -translate-x-1 group-hover:inline transition-discrete duration-1000  ease-in-out  group-hover:translate-x-2  group-hover:fade-out">
                Read More
            </span>
                
                <span className=" inline w-[10%] text-amber-600 transition delay-150 duration-1000  ease-in-out group-hover:translate-x-10 group-hover:fade-in">  →
                    
            </span>
            </div>
            
           
      </div>
    )
  }
  
  export default ServiceCard
  