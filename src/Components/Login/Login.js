import { useState } from "react";
import { auth, provider } from "../Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import Recommend from "../Recommend/Recommend";

function Login() {
    const [user, setUser] = useState("")

    useEffect(() => {
        let saved = localStorage.getItem("USER")
        if (saved) {
            setUser(saved)
        }
    }, [])

    function handleSignin() {
        signInWithPopup(auth, provider).then((data) => {
            setUser(data.user.email)
            localStorage.setItem("USER", data.user.email)
        })
    }

    return (
        <div id="login-main-div">
            {user!==""?
        <Recommend/>
        :  <button onClick={handleSignin}>Signin With Google</button>
        }
        </div>
    )
}
export default Login