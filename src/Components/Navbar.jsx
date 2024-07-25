import {useRef} from "react";
import {FaBars, FaGithub, FaTimes} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";


function Navbar(){

    const navRef = useRef();
    const showNavbar = () =>{
       navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <div className="backP">
            <header>
                <h3>Michael <span>Thulare</span></h3>
                <nav ref={navRef}>
                    <a href="#Home">Home</a>
                    <a href="#Portfolio">My Portfolio</a>
                    <a href="#AboutMe">About me</a>
                    <a href="#contactMe">Cantact Me</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </header>
            <div class="header-text">
                <p>Full-Stack Developer</p>
                <h1>Hi, I'm <span>Michael</span><br/>Thulare from South Africa</h1>
                <a href="#Portfolio"><button >Portfolio</button></a> 
                <a href="#contactMe"><button className="noBackground">Contact Me</button><br/></a>
                <div className="socials">
                    <a href="https://github.com/michael-GitHub-Coder?tab=repositories"><FaGithub/></a>  <a href="https://www.linkedin.com/in/michael-thulare-426780172/"><FaLinkedin/></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;