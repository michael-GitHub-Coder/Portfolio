import img1 from "../images/b2.jpg";
import img2 from "../images/drone55.avif";
import img3 from "../images/arduino.avif";
import { FaHashtag,FaAppStore } from "react-icons/fa";

function Portfolio(){
    return (
        <div className="portfolio-container">
            <h1 className="sub-title">My Portfolio</h1>
            <div className="work-list">
                <div className="work">
                <img src={img2}/>
                    <div className="layer">
                        <h3>Dronoticz</h3>
                        <p>THE ERA OF DRONES</p>
                        <a href="https://dronoticz-assignment1-6y1i.vercel.app/ "><FaAppStore/></a>
                    </div>
                </div>
                <div className="work">
                <img src={img1} />
                    <div className="layer">
                        <h3>Black Markrt</h3>
                        <p>Black Market is an online shopping app that specializes in rare and hard-to-find items.
 It caters to consumers seeking unique, unusual, or collectible products that may not be easily available through traditional retail channels.</p>
                        <a href="#"><FaHashtag/></a>
                    </div>
                </div>
                <div className="work">
                    <img src={img3} />
                    <div className="layer">
                        <h3>Temperature and Transport System</h3>
                        <p>This system was created during the peak of COVID-19 to allow students to log their temperature before accessing any of the institution's facilities.</p>
                        <a href="#"><FaHashtag/></a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/michael-GitHub-Coder?tab=repositories" className="btn">See more</a>
        </div>
    )
       
}
export default Portfolio;
