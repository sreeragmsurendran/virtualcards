import React, { useContext } from 'react'
import { CardComponet } from './CardComponet'
import { data } from '../data.js'
import {BsFilter } from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import { useEffect } from 'react'
import { useState } from 'react'
import { Filter } from './Filter'
import CardContext from '../ContextComponent'

export const AllCards = () => {
    const [isOpen, setisOpen] = useState(false)
   const {dataInfo, updateData} =useContext(CardContext)
   const [search, setSearch] = useState('')
   const [details, setDetails] = useState([])
   
    useEffect(() => {
        
            setDetails(dataInfo)
    }, [dataInfo])
    const filterData =()=>{
        setisOpen(!isOpen);
    }
    const searchData=()=>{
        // setSearch(e.target.value)
        console.log(search)
        if(search){
            const info = dataInfo.filter(item => item.name.includes(search) )
            const {myinfo} =info
            setDetails(info)
            console.log(details,"Details")
            console.log(dataInfo,"dataInfo")
            updateData(info)

         }
         else{
        setDetails(data)
         }
    }
    // function handleChange(e) {
    //     console.log(e.target.value);
    //     setSearch(e.target.value)
    //     if(search){
    //         const info = dataInfo.filter(item => item.name.includes(search) )
    //         dataInfo(info)
    //     //   updateData(info)

    //      }else{
    //       updateData(data)
    //      }
    //   }
    const reset=()=>{
        updateData(data)
        setisOpen(!isOpen)
    }

    return (
        <div className='filter_search' >


            <div className='search_item'>
               
                <div className='search_icon'>
                <input className="form-control mr-sm-2 input_search" placeholder='Search' value={search} type="text" onChange={(e)=> setSearch(e.target.value)} />
                    <button type='button' className='search_button' onClick={searchData}><BsSearch size={20} /></button></div>
                {!isOpen ? <button type="button" className="btn filter" onClick={filterData}><BsFilter/>Filter</button>  : <button type='button'  className="btn filter" onClick={reset} >Reset</button> }
                {isOpen && <Filter setisOpen={setisOpen} filterData={filterData}  />}              
            </div>
            
            <div className='cards_align row'>
                {
                    details.map((item, key) => {
                        return (
                            <CardComponet data={item} key={key} />
                        )
                    })
                }
            </div>
        </div>
    )
}
