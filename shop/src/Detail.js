import React, {useState} from 'react'

import {useHistory, useParams} from 'react-router-dom'

function Detail(props) {

    const hostory = useHistory()
    const {id} = useParams()

    const productNo = props.shoe.find(function(el){
        return el.id == id
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={props.shoe[id].img} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{productNo.title}</h4>
                <p>{productNo.content}</p>
                <p>{productNo.price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    hostory.goBack()
                }}>목록</button> 
                </div>
            </div>
        </div> 
    )
    
  }

  export default Detail