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
                        <p>Black Market is an online shopping app primarily for rare and hard-to-find items.</p>
                        <a href="#"><FaHashtag/></a>
                    </div>
                </div>
                <div className="work">
                    <img src={img3} />
                    <div className="layer">
                        <h3>Tshimologong Website clone</h3>
                        <p>Tshimologong website clone.</p>
                        <a href="https://tshimologong-clone.vercel.app/"><FaHashtag/></a>
                    </div>
                </div>
            </div>
            <a href="https://github.com/michael-GitHub-Coder?tab=repositories" className="btn">See more</a>
        </div>
    )
       
}
export default Portfolio;
