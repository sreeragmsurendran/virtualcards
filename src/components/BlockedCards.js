import React, { useContext, useEffect, useState } from 'react'
import { CardComponet } from './CardComponet'
import CardContext from '../ContextComponent'




export const BlockedCards = () => {
  const {dataInfo, updateData} =useContext(CardContext)
const [infodata, setinfodata] = useState([])
useEffect(() => {
  const data= dataInfo.filter(item => item.status == 'blocked' )
  setinfodata(data)
}, [])
  return (
    <div className='filter_search' >
            
            <div className='cards_align row'>
                {
                    infodata.map((item, key) => {
                        return (
                            <CardComponet data={item} key={key} />
                        )
                    })
                }
            </div>
        </div>
  )
}
