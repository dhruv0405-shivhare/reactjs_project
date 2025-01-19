
import { useEffect, useState } from "react";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

const Login = () =>{

        let navigate = useNavigate();
        let[getdata,setData] = useState(null)
        let[status,setStatus] = useState(false) 
        let[inputdata,setInp] = useState({
            "name":'',
            "numb":'',
            "psw":'',
        })
    
        const hinput = (e) =>{
            const{name,value} = e.target;
            console.log(e.target.value);
            setInp({
                ...inputdata,
                [name]:value
            })
    
        }
        const validform = (e) =>{
            e.preventDefault();
            console.log(inputdata);
            if(inputdata.name === getdata.name 
                && inputdata.email === getdata.email 
                  && inputdata.psw === getdata.psw)
            {
                alert("Successfull")
                setStatus(true)
            }
            else{
                alert("Data not matched")      
           }
    }
            if(status)
            {
               navigate('/home')
            }
        
            useEffect(()=>{
                let getd = JSON.parse(localStorage.getItem("data"))
                setData(getd)
            },[])
        return(
            <>
            <body className="loginbody">
                <div className="main2">
                    <h1>Login</h1>
    
                    <form className="formm" onSubmit={validform}>
                        <input className="inp" type="text" name="name" value={inputdata.name} placeholder="Enter your Name" onChange={hinput}  /> <br />
    
                        <input className="inp" type="text" name="email" value={inputdata.email} placeholder="Enter your Email" onChange={hinput} /> <br />
                        
                        <input className="inp" type="text" name="psw" value={inputdata.psw} placeholder="Enter Your Password" onChange={hinput} /> <br />
                        
                        
                        <input className="btn2" type="submit"  />
                    </form>
                    <h2>New Here? Go there- <Link to={'/signup'}>Sign Up</Link></h2>
                </div>
            </body>
            </>
        )
}

export default Login