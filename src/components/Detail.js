import '../my-tools/design/detail.css' 
import {Link,useLocation, useParams} from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { BackgroundContext } from '../App'

const Detail=()=>{
    const {darkback}=useContext(BackgroundContext)
   const {id}=useParams()
   const [url, seturl]=useState(`https://restcountries.com/v3.1/name/${id}`)
    const [data,setData]=useState([])
    useEffect(()=>{
        async function get(){
            const request=await fetch(url)
            const response=await request.json()
            setData(response)
            console.log(response)
        }
        get()
    },[url])
    return (
        <div className='boxof'>
           <div className='back-area'>
               <Link to={'/'}><button className={darkback?'darkmode':'lightmode'}><FaArrowLeft className='arrow'/>Back</button></Link>
           </div>
           <div className='detail-area'>
              {(()=>{
                if(data.length<=0){
                    return <div>loading</div>
                }else{
                    console.log(data[0])
                    return (<div className='gri-parent'>
                                 <img src={data[0].flags.svg} alt='pic'/>
                                 <div className='gri'>
                                    <div className='gri1'>
                                        <div className='name'>{data[0].name.common}</div>
                                        <div>Native Name: ( {(()=>{
                                            const obj=data[0].name.nativeName
                                            const val=Object.values(obj)
                                            const yt=Object.values(val)
                                            return (<span className='native'>
                                                {yt.map((y)=>{
                                                    console.log(y)
                                                    return (<span>Official: {y.official}, Common: {y.common}</span>)
                                                })}
                                            </span>)
                                        })()})</div>
                                        <div>Population: {data[0].population}</div>
                                        <div>Region: {data[0].region}</div>
                                        <div>Sub Region: {data[0].subregion}</div>
                                        <div>Capital: {data[0].capital}</div>
                                    </div>
                                    <div className='gri2'>
                                        <div>Top Level Domain: {data[0].tld}</div>
                                        <div>Currencies: {(()=>{
                                            const currency=data[0].currencies
                                            const key=Object.keys(currency)
                                            return <div>Name: {currency[key].name}, Symbol: {currency[key].symbol}</div>
                                        })()}</div>
                                        <div>Languages: {(()=>{
                                            const lang=data[0].languages
                                            const key=Object.values(lang)
                                            return ( <span className='languages'>
                                                {key.map((ke)=>{
                                                    return <span>{ke}</span>
                                                })}
                                            </span>)
                                        })()}</div>
                                    </div>
                                    <div className='gri3'>
                                        <span>Border Countries:</span> {data[0].borders===undefined?'none':data[0].borders.map((bor)=>{
                                            return <Link to={`/detail/${bor}`}><div key={data[0].name.official} onClick={()=>seturl(`https://restcountries.com/v3.1/name/${bor}`)} className={`bordercoun ${darkback?'darkmode':'lightmode'}`}>{bor}</div></Link>
                                        })}
                                    </div>
                                 </div>
                             </div>)
                }
              })()}
           </div>
        </div>
    )
}

export default Detail