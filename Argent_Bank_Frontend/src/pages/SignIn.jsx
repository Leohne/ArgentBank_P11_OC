import { useState } from "react"
import { userLogin } from "../Redux/actions/authentification"
import { useNavigate } from "react-router-dom";

function SignIn() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate();

const handlelogin = async (e) => {
  (e).preventDefault ()
  try {
        await userLogin(email, password)
        navigate("/user");
} catch(error) {
        console.log("erreur id/mdp", error.message)
}}
    return (

        <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handlelogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" value={email} id="username" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
            <button type="submit" className="sign-in-button">Sign In</button>        
        </form>
      </section>
    </main>
    )
}

export default SignIn