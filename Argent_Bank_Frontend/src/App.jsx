import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Homepage from "./pages/Homepage"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import User from "./pages/User"
import Footer from "./component/Footer"

function App() {
  
    return (
        <BrowserRouter>
            <>
                <Header/>
                <Routes>
                    <Route index element={<Homepage/>}/>
                    <Route path="/sign-in" element={<SignIn/>} />
                    <Route path="/sign-up" element={<Signup/>}/>
                    <Route path="/user" element={<User/>}/>
                </Routes>
                <Footer/>
            </>
        </BrowserRouter>
  )
}

export default App
