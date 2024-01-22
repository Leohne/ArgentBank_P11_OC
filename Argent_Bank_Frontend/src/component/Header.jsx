import { Link } from "react-router-dom"
import AB_Logo from "../assets/img/argentBankLogo.png"
import { useLocation } from 'react-router-dom';
import { userDisconnected } from "../Redux/actions/authentification";

function Header() {
const location = useLocation()
const user = location.pathname === "/user"
const content = user ? 'Disconnect' : 'Sign in'

    return(
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={AB_Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/sign-in" className="main-nav-item" onClick={userDisconnected}>
          <i className="fa fa-user-circle"></i>
          {content}
        </Link>
      </div>
    </nav>
    )
}

export default Header