import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.get("http://localhost:5000/auth/logout").then((res) => {
      if (res.data.status) {
        navigate("/login");
      }
    }).catch(err=>{
      console.log(err)
    })
  };
  return (
    <div>
      Home
      <button>
        <Link to="/dashboard">Dashboard</Link>
      </button>
      <br />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
