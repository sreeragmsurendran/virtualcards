import React from 'react'
const {dataInfo, updateData} =useContext(CardContext)
useEffect(() => {
  
}, [third])


export const BlockedCards = () => {
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
