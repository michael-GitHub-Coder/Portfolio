import bodyP from "../images/b2.jpg";

function Aboutme(){
    return(
        <div className="card-container">
            <div className="card">
                <img src={bodyP}/>
            </div>
            <div className="card">
                <div className="card-content">
                    <h1><span>About Me</span></h1>
                    <p>Hello! I'm Michael, a passionate front-end developer with a keen interest in creating intuitive and dynamic user experiences.Currently, 
                        I'm diving deep into React through the insightful tutorials on Web Dev Simplified,
                        expanding my knowledge and honing my skills.</p>
                    <h2><span>My Journey</span></h2>
                    <p>I began my journey in web development with a fascination for how websites are built and a desire to bring ideas to life on the web. Over time, 
                        I have gained proficiency in HTML, CSS, and JavaScript, and I am now exploring the powerful capabilities of React.</p>
                </div>
            </div>
        </div>

    )
}
export default Aboutme;