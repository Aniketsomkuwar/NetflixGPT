import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Utils/firebase"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { pushUserData, removeUserData } from "./Utils/ReduxSlice/userSlice"

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

      } else {
        // User is signed out

        dispatch(removeUserData())
        navigate("/login")
      }
    });
  }, [])



  return (
    <>

      <NavBar />
      <Outlet />
      <Footer />

    </>
  )
}

export default App
