
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Forms = ()=>{
  
    const[User,setUser] = useState("");
    const[Nuser,setNuser] = useState("");

    const notify = () => toast("Your Data Submitted Sucessfully ✅");
    const notify1 = () => toast("The Data Is Reset 🗑️");

    const getUserName = (event)=>{
            setUser(event.target.value)
    }

    const NewUser = ()=>{
     setNuser(User)
    }

    const Reset = ()=>{
       setUser("");  // Reset the input field value.
       setNuser(""); // Reset the display value.
        notify1()
    };

    const userDetails = (event)=>{
        event.preventDefault()
        setNuser(User)
        notify()
    }

    return(
    <section className="fS">
        <ToastContainer/>
        <h2>{Nuser}</h2>
        <div>
            <form onSubmit = {userDetails}>
            <input type ="text" placeholder ="Enter Your Name" value ={User} onChange ={getUserName} required/><br/>
            <button type="submit" className="btne" onClick={NewUser}>Submit</button>
            <button type="button" className="btne1" onClick={Reset}>Reset</button> 
            </form>
        </div>
    </section>
  )
}

export default Forms
