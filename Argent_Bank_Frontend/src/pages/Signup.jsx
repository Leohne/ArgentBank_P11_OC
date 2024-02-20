import { useState } from "react"
import { createNewUser } from "../Redux/actions/userProfile"
import { useNavigate } from "react-router-dom";

function Signup() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const navigate = useNavigate();

const handlelogin = async (e) => {
  (e).preventDefault ()
  try {
        await createNewUser(email, password, firstName, lastName );
        navigate("/sign-in");
} catch(error) {
        console.log(error.message)
}}
    return (

        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign Up</h1>
        <form onSubmit={handlelogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input type="text" value={firstName} id="firstName" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" value={lastName} id="lastName" onChange={(e) => setLastName(e.target.value)} />
          </div>
            <button type="submit" className="sign-in-button">Sign Up</button>        
        </form>
      </section>
    </main>
    )
}

export default Signup