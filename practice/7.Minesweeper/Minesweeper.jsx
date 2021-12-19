import React, { useReducer, useState } from "react";
import Form from './Form'
import Table from './Table'


const initialState = {}

const reducer = (state, action) => {
    tableData : []
}


const  Minesweeper = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <Form></Form>
            <Table></Table>
        </>
    )
}

export default Minesweeper