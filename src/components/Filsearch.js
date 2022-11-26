import {useContext, useEffect, useState} from 'react'
import {FaAngleDown,FaAngleUp,FaSistrix} from 'react-icons/fa'
import { BackgroundContext } from '../App'

const Filsearch=({setpageurl,setpagedata,pageData,children})=>{
    const {darkback}=useContext(BackgroundContext)
    const [filterdrop,setFilterdrop]=useState(false)
    const continents=['Africa','America','Asia','Europe','Oceania']
    // console.log('nigeria'.toUpperCase().includes('NIGERIA'))
    return (
        <div className='filsearch'>
            <div className=''><FaSistrix className='search-icon'/>{children}</div>
            <div onClick={()=>setFilterdrop(!filterdrop)} className={`filter ${darkback?'darkmode':'lightmode'}`}>
                <div className='region-filter'>Filter by Region</div>
                {filterdrop?<FaAngleDown className='mar-left'/>:<FaAngleUp className='mar-left'/>}
                <div className={`filter-continents ${filterdrop?'disblock':'disnone'} ${darkback?'darkmode':'lightmode'}`}>
                    {continents.map((conti)=>{
                        return(
                            <div onClick={()=>setpageurl(`https://restcountries.com/v3.1/region/${conti}`)} key={conti}>{conti}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Filsearch