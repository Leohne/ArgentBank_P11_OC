import { useState } from "react"
import { replaceUserName } from "../Redux/actions/userProfile"
import { useDispatch } from "react-redux"

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
            <h2 className="modal_title">Edit Name</h2>
            <button className="modal_cross" onClick={onClose}>X</button>
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


export default EditName;