import {React , useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "../styles/Signin.css"
function Signin() {
  
  const navigate=useNavigate();
  
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState(false);

  const PostData = () => {
    fetch('/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setErr(data.error);
        } else {
          console.log(data);
          navigate("/")
        }
      })
      .catch(err=>{
        console.log(err);      })
  };

  return (
    <div className="signinContainer">
      <div className="card second">
        <h2>Food management</h2>
        
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-2"
          onClick={() => PostData()}
        >
          Sign up
        </button>
        <div className='Link'> 
          <Link to="/signup">Don't have an account ?</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin
