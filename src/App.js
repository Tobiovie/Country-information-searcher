import Box from "./components/Box";
import Nav from "./components/Nav";
import {Route,Routes} from 'react-router-dom'
import Detail from "./components/Detail";
import { createContext, useState } from "react";

export const BackgroundContext=createContext(null);

export default function App() {
   const [darkback,setBackground]=useState(true)
   const body=document.querySelector('body')
   body.style.background=`${darkback?'hsl(207, 26%, 17%)':'hsl(0, 0%, 98%)'}`
   body.style.color=`${darkback?'white':'hsl(200, 15%, 8%)'}`
  return (
   <BackgroundContext.Provider value={{darkback,setBackground}}>
      <div className="background">
         <Nav></Nav>
         <Routes>
            <Route path="/" element={<Box/>}/>
            <Route path="detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   </BackgroundContext.Provider>
  )
}



  
