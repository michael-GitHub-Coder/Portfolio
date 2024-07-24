import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

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
                    <a href="#">Home</a>
                    <a href="#">My Portfolio</a>
                    <a href="#">About me</a>
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
                <button>Portfolio</button> <button className="noBackground">Contact Me</button>
            </div>
        </div>
    )
}
export default Navbar;