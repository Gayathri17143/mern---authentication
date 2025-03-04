import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";

const Login = () => {
   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  axios.defaults.withCredentials=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/auth/login", {
      
      email,
      password,
    }).then(response =>{
      if(response.data.status){
      navigate('/')
      }
    }).catch(err=>{
      console.log(err)
    })
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
       
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{marginBottom:"20px"}}>Login</button>
        <Link to="/forgotpassword"> Forgot Password?</Link>
        <p>Dont Have an Account?  <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
