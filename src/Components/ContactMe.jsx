
function ContactMe(){
   
    return (
        <div className="FormBackground">
            <form>
                <input type="text" placeholder="FullName"/><br/>
                <input type="email" placeholder="Email-Address"/><br/>
                <input type="text" placeholder="Contact Number"/><br/>
                <textarea type="text" placeholder="Message"/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default ContactMe;