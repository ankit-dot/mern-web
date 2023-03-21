import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState(false);

  const PostData = () => {
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErr(data.error);
        } else {
          console.log(data);
          navigate("/signin")
        }
      })
      .catch(err=>{
        console.log(err);      })
  };

  return (
    <div className="signupContainer">
      <div className="card second">
        <h2>Food Management</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <div>
          <Link to="/signin">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

