import { FaGithub, FaLinkedin } from "react-icons/fa";

function ContactMe(){
   
    return (
        <div className="FormBackground">
            <div className="contactmeme">
                <h1>Contact Me</h1>
                <div className="slide-left">
                    <h2>Email-Address</h2>
                    <p>Motlokwa.thulare@gmail.com</p>
                    <h2>Phone Numbers</h2>
                    <p>+27792621350</p>
                    <h2>Location</h2>
                    <p>Olievenhoutbosch, Centurion</p>
                    <div className="contact-socials">
                        <FaGithub/><FaLinkedin/>
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