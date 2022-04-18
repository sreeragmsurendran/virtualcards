import React, { useContext } from 'react'
import { CardComponet } from './CardComponet'
import { data } from '../data.js'
import {BsFilter } from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import { useEffect } from 'react'
import { useState } from 'react'
import { Filter } from './Filter'
import CardContext from '../ContextComponent'

export const YourCard = () => {
    const [owner, setOwner] = useState()
   const {dataInfo, updateData} =useContext(CardContext)
   const [infodata, setInfodata] = useState([])

  console.log(dataInfo,owner)
   const {info} =dataInfo
    const ownerData =()=>{
    const ownerdata = dataInfo.filter(item => item.owner_id == owner )
    setInfodata(ownerdata);
    }
    const [noofelemet, setNoofelemet] = useState(10);
    const slice = infodata.slice(0,noofelemet)
    console.log(slice,"slice")

    const  handleScroll = (event) =>  { 
        setNoofelemet(noofelemet+noofelemet)
      }

    window.addEventListener('scroll', ()=>{
        window.pageYOffset >1500 && handleScroll()
      });
  
    return (
        <div className='filter_search' >


            <div className='search_item'>
               
                <div className='search_icon'>
                <input className="form-control mr-sm-2 input_search" placeholder='Enter Owner ID' value={owner} type="text" onChange={(e)=> setOwner(e.target.value)} />
                    <button type='button' className='search_button' onClick={ownerData}><BsSearch size={20} /></button></div>
     
            </div>
            
            <div className='cards_align row'>
                {
                    slice.map((item, key) => {
                        return (
                            <CardComponet data={item} key={key} />
                        )
                    })
                }
            </div>
        </div>
    )
}
