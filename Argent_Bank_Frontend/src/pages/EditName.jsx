import { useState } from "react"
import { replaceUserName } from "../Redux/actions/userProfile"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types";

function EditName ( {onClose} ) {
    const [username, setUsername] = useState('')
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    
    const handleUserName = (e) => {
        (e).preventDefault ()
        dispatch(replaceUserName({ userName: username, token }));
        onClose()
    }
    return (
        <div className="modal">
            <h3 className="modal_title">Edit Name</h3>                      
            <form onSubmit={handleUserName}>
                <div className="input-wrapper">
                    <label htmlFor="username" className="modal_title">Username</label>
                    <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} required />
                    <button type="submit" className="sign-in-button">Confirm</button>
                </div>        
            </form>
        </div>
    )
}

EditName.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

export default EditName;