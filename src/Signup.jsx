import { useState } from "react"
import Login from "./Login"
import { Link } from "react-router-dom"
import './Signup.css'
const Signup = () =>{

    let[status,setStatus] = useState(false) 
    let[inputdata,setInp] = useState({
        "name":'',
        "email":'',
        "city":'',
        "numb":'',
        "psw":'',
        "psw2":''
    })

    const hinput = (e) =>{
        const{name,value} = e.target;
        console.log(e.target.value);
        setInp({
            ...inputdata,
            [name]:value
        })

    }
    const finalsubmit = (e) =>{
        e.preventDefault();
        console.log(inputdata);
        if(inputdata.name === "" || inputdata.email === "" || inputdata.city === "" || inputdata.numb === "" || inputdata.psw === "" || inputdata.psw2 === "")
        {
            alert("All fields are required")
        }
        else{
            alert("Signed Up Successfully")
        localStorage.setItem("data",JSON.stringify(inputdata))  
        setStatus(true)      
       } 
}
        if(status)
        {
           return <Login />
        }
    
    return(
        <>
        <body className="signupbody">
            <div className="main">
                <h1>Sign Up</h1>

                <form className="forms" onSubmit={finalsubmit}>
                    <input type="text" name="name" value={inputdata.name} placeholder="Enter your Name" onChange={hinput}  /> <br />

                    <input type="text" name="email" value={inputdata.email} placeholder="Enter your Email" onChange={hinput} /> <br />
                    
                    <input type="text" name="city" value={inputdata.city} placeholder="Enter your City" onChange={hinput} /> <br />
                    
                    <input type="text" name="numb" value={inputdata.numb} placeholder="Enter your Number" onChange={hinput} /> <br />
                    
                    <input type="text" name="psw" value={inputdata.psw} placeholder="Enter new Password" onChange={hinput} /> <br />
                    
                    <input type="text" name="psw2" value={inputdata.psw2} placeholder="Confirm Password" onChange={hinput} /> <br />
                    
                    <input className="btn" type="submit"  />
                </form>
                <h1>Already an Account? Login here- <Link to={'/login'}>Login</Link></h1>
            </div>
        </body>
        </>
    )
}

export default Signup