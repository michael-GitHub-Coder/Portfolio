import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";

function ContactMe(){

    return (
        <div className="FormBackground">
            <div className="contactmeme">
                <h1>Contact Me</h1>
                <div className="slide-left">
                    <h2>Email-Address</h2>
                    <div className="pos">
                        <FaEnvelope/><a href="mailto:Motlokwa.thulare@gmail.com"><p>Motlokwa.thulare@gmail.com</p></a>
                    </div>
                    <h2>Phone Numbers</h2>
                    <div className="pos">
                        <FaPhone /><a href="tel:+27792621350"><p>+27792621350</p></a>
                    </div>
                    <h2>Location</h2>
                    <div className="pos">
                        <FaMapMarkerAlt/><a href="https://maps.app.goo.gl/P4CmoCCS53tzKWRQ7"><p>Olievenhoutbosch, Centurion</p></a>
                    </div>
                    <div className="contact-socials">
                        <a href="https://github.com/michael-GitHub-Coder?tab=repositories">
                            <FaGithub />
                        </a>

                        <a href="https://www.linkedin.com/in/michael-thulare-426780172/">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="form-section">
                <form>
                    <input type="text" placeholder="FullName"/><br/>
                    <input type="email" placeholder="Email-Address"/><br/>
                    <input type="text" placeholder="Contact Number"/><br/>
                    <textarea type="text" placeholder="Message"/><br/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactMe;