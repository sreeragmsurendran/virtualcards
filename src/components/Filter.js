import React, { useContext ,useState } from 'react'
import CardContext from '../ContextComponent'
import { data } from '../data.js'

export const Filter = ({setisOpen, isOpen ,filterData }) => {
    const {dataInfo,updateData} =useContext(CardContext)
    const [radio, setRadio] = useState('')
    const resetdata =data
    const [selected, setSelected] = useState('')

    const updateFilter=(e)=>{
       e.preventDefault()
       if(radio || selected){
          const info = dataInfo.filter(item => item.card_type ==radio )
          console.log(info,radio)
            updateData(info)
       
       }else{
        updateData(resetdata)
       }

       filterData()
    }
    return (
        <div className='filter_body'>
            <div className='heading'> <h3>Filter</h3></div>
           
            <hr />
            <form onSubmit={updateFilter}>
            <span>Type</span>
                <div className="mb-3 check_box">
                    <div className="form-check check_class">
                        <input className="form-check-input" type="checkbox"  onChange={(e)=>setRadio(e.target.value)} value="subcribe" id="flexCheckIndeterminate" />
                        <label className="form-check-label">
                            subcribe
                        </label>
                    </div>
                    <div className="form-check check_class">
                        <input className="form-check-input" type="checkbox" value="burner"  onChange={(e)=>setRadio(e.target.value)} id="flexCheckIndeterminate" />
                        <label className="form-check-label" >
                            burner
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <span>Card Holders</span>
                    <select className="form-select"  onChange={(e)=>setSelected(e.target.value)}>
                        <option value="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='button_filter'>
                <button type="submit" className="btn btn-primary button_margin">Apply</button>
                <button type="button" className="btn btn-primary button_margin" onClick={filterData}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
