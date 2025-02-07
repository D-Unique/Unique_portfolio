import NavBar from "../component/NavBar"
import Banner from "../component/Banner"
import Service from "../features/myService/component/Service"
import AboutMe from "../features/aboutMe/component/AboutMe"

function HomePage() {
    return (
        <div className="relative">
            
            <NavBar />
            <Banner />
            <Service />
            <AboutMe />
    
            
      
        </div>
    )
}

export default HomePage
