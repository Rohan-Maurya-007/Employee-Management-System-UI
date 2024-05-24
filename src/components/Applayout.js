import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"
import {Outlet} from "react-router-dom"

function Applayout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Applayout;