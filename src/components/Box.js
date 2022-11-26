import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BackgroundContext } from "../App"
import Filsearch from "./Filsearch"

const Box=()=>{
    const {darkback,setBackground}=useContext(BackgroundContext)
    const inputchage=(e)=>{
        console.log(searchname)
        setsearchname(e.target.value)
    }
    const [searchname,setsearchname]=useState('')
    const [display,setdisplay]=useState(true)
    const [data,setData]=useState([])
    const [url,setUrl]=useState('https://restcountries.com/v3.1/all')
    useEffect(()=>{
        async function get(){
            const request=await fetch(url)
            const response=await request.json()
            setData(response)
            console.log(data)
        }
        get()
    },[url])
    return (
        <div className='box'>
            <Filsearch setdisplay={setdisplay} display={display} pageData={data} setpagedata={setData} setpageurl={setUrl}>
                <input className={darkback?'darkmode':'inback'} onChange={inputchage} placeholder='Search for a country' type='text'/>
            </Filsearch>
            <div className='mapapi'>
                {data.length<=0?'loading':(data.filter((da)=>{
                    return da.name.common.toUpperCase().includes(searchname.toUpperCase())
                }).length<=0?('no countries matches your search'):data.filter((fa)=>{
                    return fa.name.common.toUpperCase().includes(searchname.toUpperCase())
                }).map(
                    (dat)=>{
                        return (
                            <div className="mapitem" key={dat.name.official}>
                                <Link to={`detail/${dat.name.common||dat.name.official}`}>
                                    <div><img alt="pic" src={dat.flags.png}/>
                                        <div className={`list-about ${display?'disflex':'disnone'} ${darkback?'darkmode':'lightmode'}`}>
                                            <div className="common-name">{dat.name.common}</div>
                                            <div>Population: {dat.population}</div>
                                            <div>Region: {dat.region}</div>
                                            <div>Capital: {dat.capital}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        
                        )
                    }
                ))}
            </div>
        </div>
    )
}
export default Box