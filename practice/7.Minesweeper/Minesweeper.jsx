import React, { createContext, useReducer, useState } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
    NORMAL: 0, // 지뢰 없는곳
    MINE: 1, // 지뢰 있는곳
    NORMAL_OPEN: 2, // 지뢰 없는곳 오픈
    MINE_OPEN: 3 // 지뢰 있는곳 오픈
};

export const TableContext = createContext({
    tableData: [],
    dispatch: () => {}
});

const mineSearchInit = (row, col, mine) => {
    console.log(row, col, mine);
    const cnadidate = Array(row * col)
        .fill()
        .map((v, i) => {
            return i;
        });

    const minePositionArr = [];
    while (cnadidate.length > row * col - mine) {
        minePositionArr.push(
            cnadidate.splice(Math.floor(Math.random() * cnadidate.length), 1)
        );
    }

    const tableData = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        tableData.push(rowData);
        for (let j = 0; j < col; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    for (let i = 0; i < minePositionArr.length; i++) {
        const r = Math.floor(minePositionArr[i] / row);
        const c = minePositionArr[i] % row;
        tableData[r][c] = CODE.MINE;
    }
    return tableData;
};
const initialState = {
    tableData: mineSearchInit(10, 10, 15)
};

export const START_GAME = "START_GAME";
export const OPEN_NORMAL = "OPEN_NORMAL";
export const OPEN_MINE = "OPEN_MINE";

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: mineSearchInit(action.row, action.cell, action.mine)
            };
        case OPEN_NORMAL: {
            const tableData = [...state.tableData];
            tableData.forEach((row, i) => {
                tableData[i] = [...row];
            });

            tableData[action.row][action.cell] = CODE.NORMAL_OPEN;

            return {
                ...state,
                tableData: tableData
            };
        }
        case OPEN_MINE: {
            const tableData = [...state.tableData];
            tableData.forEach((row, i) => {
                tableData[i] = [...row];
            });

            tableData[action.row][action.cell] = CODE.MINE_OPEN;

            return {
                ...state,
                tableData: tableData
            };
        }
        default:
            return state;
    }
};

const Minesweeper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData } = state;

    const value = { tableData, dispatch };

    return (
        <TableContext.Provider value={value}>
            <Form></Form>
            <Table></Table>
        </TableContext.Provider>
    );
};

export default Minesweeper;
