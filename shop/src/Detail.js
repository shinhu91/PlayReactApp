import React, {useState} from 'react'

import {useHistory, useParams} from 'react-router-dom'

import styled from 'styled-components'

import './Detail.scss'

const HeaderDiv = styled.div`
    padding : 10px;
`
const Headerh4 = styled.h4`
    font-size : 25px;
`

function Detail(props) {

    const hostory = useHistory()
    const {id} = useParams()

    const productNo = props.shoe.find(el => {
        console.log(el.id, id)
        return el.id == id
    })

    return (
        <div className="container">
            <HeaderDiv>
                <Headerh4 className="red">Detail</Headerh4>
            </HeaderDiv>
            <div className="warning-red">
                <p>재고가 얼마 남지 않았습니다</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                <img src={productNo.img} width="100%" />
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