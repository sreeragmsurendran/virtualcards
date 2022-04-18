import React from 'react'
import { ImFire } from 'react-icons/im'
import { IoMdSync } from 'react-icons/io'
export const CardComponet = ({ data }) => {

    const progresspercent = (data.spent.value) * 100 / (data.spent.value + data.available_to_spend.value)
    return (<div className="card card_box shadow p-3 mb-5 bg-body rounded cards_item col-md-6" style={{ width: "30rem", height: "20rem" }}>
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <div className='card_main'>

                <div className='card_first'>
                    <p>{data.budget_name}</p>
                    <div className='badge_type'>
                    <span  className='badge bg-light text-dark card-type'>{data.card_type}</span>
                    </div>
                    
                </div>
                <div className='card_second'>

                    <div className='icon_circle'>{data.card_type === "burner" ? <ImFire /> : <IoMdSync />}</div>

                    <div>{data.card_type === "burner" ? <p>Expiry : {data.expiry}</p> : <p>{data.august}</p>}</div>
                </div>

            </div>
            <div className='progress' style={{ width: '100%', background: "green" }}>
                <div className='childprogress' style={{ width: `${progresspercent}%`, background: "red" }} ></div>

            </div>
            <div className='first_circle'>
                <div>
                    <div className='circle'></div>
                    <p>spent</p>
                </div>
                <p>{data.spent.value}</p>
            </div>
            <div className='first_circle' >
                <div>
                    <div className='circle'></div>
                    <p>Available to Spent</p>
                </div>
                <p>{data.available_to_spend.value}</p>
            </div>

        </div>
    </div>
    )
}
