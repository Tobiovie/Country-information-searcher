import { useContext } from "react"
import { BackgroundContext } from "../App"
import {WiDaySunny, WiMoonWaningCrescent1} from 'react-icons/wi'
const Nav=()=>{
    const {darkback,setBackground}=useContext(BackgroundContext)
    
   return (
    <nav className={`${darkback?'darkmode':'lightmode'}`}>
        <div>where in the world</div>
        <div className="parent-wi" onClick={()=>setBackground(!darkback)}>{!darkback?<WiDaySunny className="wi-icon"/>:<WiMoonWaningCrescent1 className="wi-icon"/>}{
            darkback?'dark mode':'light mode'
        }</div>
    </nav>
   )
}
export default Nav