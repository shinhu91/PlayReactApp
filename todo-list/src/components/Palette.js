import React, { Component, useEffect } from 'react'
import './Palete.css'

const Color = ({ color, selected, onClick }) => {
    return (
        <div className={`color ${selected && 'active'}`} style={{ backgroundColor: color }} onClick={onClick}></div>
    )
}

const Palette = ({ colors, selected, onClick }) => {

    const colorList = colors.map((el, index) => {
        return <Color color={el} selected={selected == el} onClick={()=>{onClick(el)}} key={el}></Color>
    })

    return (
        <>
            {colorList}
        </>
    )
}

export default Palette