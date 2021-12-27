import React, { createContext, useReducer, useState } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
    NORMAL: -1,
    MINE: -7,
    OPENED: 0,
    MINE_CLICK: -6,
    FLAG_MINE: -5,
    FLAG: -4,
    QUESTION_MINE: -3,
    QUESTION: -2

    // NORMAL: 0, // 지뢰 없는곳
    // MINE: 1, // 지뢰 있는곳
    // NORMAL_OPEN: 2, // 지뢰 없는곳 오픈
    // MINE_OPEN: 3 // 지뢰 있는곳 오픈
};

export const TableContext = createContext({
    tableData: [],
    halted: false,
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
    tableData: mineSearchInit(10, 10, 15),
    halted: false
};

export const START_GAME = "START_GAME";
export const NORMAL_CLICK = "NORMAL_CLICK";
export const MINE_CLICK = "MINE_CLICK";

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: mineSearchInit(action.row, action.cell, action.mine),
                halted: false
            };
        case NORMAL_CLICK: {
            const tableData = [...state.tableData];
            tableData.forEach((row, i) => {
                tableData[i] = [...row];
            });
            const checked = [];
            let openedCount = 0;
            console.log(tableData.length, tableData[0].length);

            const checkAround = (row, cell) => {
                if (
                    row < 0 ||
                    row >= tableData.length ||
                    cell < 0 ||
                    cell >= tableData[0].length
                ) {
                    return;
                } // 상하좌우 없는칸은 안 열기
                if (
                    [
                        CODE.OPENED,
                        CODE.FLAG,
                        CODE.FLAG_MINE,
                        CODE.QUESTION_MINE,
                        CODE.QUESTION
                    ].includes(tableData[row][cell])
                ) {
                    return;
                } // 닫힌 칸만 열기
                if (checked.includes(row + "/" + cell)) {
                    return;
                } else {
                    checked.push(row + "/" + cell);
                } // 한 번 연칸은 무시하기
                let around = [
                    tableData[row][cell - 1],
                    tableData[row][cell + 1]
                ];
                if (tableData[row - 1]) {
                    around = around.concat([
                        tableData[row - 1][cell - 1],
                        tableData[row - 1][cell],
                        tableData[row - 1][cell + 1]
                    ]);
                }
                if (tableData[row + 1]) {
                    around = around.concat([
                        tableData[row + 1][cell - 1],
                        tableData[row + 1][cell],
                        tableData[row + 1][cell + 1]
                    ]);
                }
                const count = around.filter(function (v) {
                    return [
                        CODE.MINE,
                        CODE.FLAG_MINE,
                        CODE.QUESTION_MINE
                    ].includes(v);
                }).length;
                if (count === 0) {
                    // 주변칸 오픈
                    if (row > -1) {
                        const near = [];
                        if (row - 1 > -1) {
                            near.push([row - 1, cell - 1]);
                            near.push([row - 1, cell]);
                            near.push([row - 1, cell + 1]);
                        }
                        near.push([row, cell - 1]);
                        near.push([row, cell + 1]);
                        if (row + 1 < tableData.length) {
                            near.push([row + 1, cell - 1]);
                            near.push([row + 1, cell]);
                            near.push([row + 1, cell + 1]);
                        }
                        near.forEach((n) => {
                            if (tableData[n[0]][n[1]] !== CODE.OPENED) {
                                checkAround(n[0], n[1]);
                            }
                        });
                    }
                }
                if (tableData[row][cell] === CODE.NORMAL) {
                    // 내 칸이 닫힌 칸이면 카운트 증가
                    openedCount += 1;
                }
                tableData[row][cell] = count;
            };

            checkAround(action.row, action.cell);
            let halted = false;
            let result = "";
            return {
                ...state,
                tableData,
                openedCount: state.openedCount + openedCount,
                halted,
                result
            };
        }
        case MINE_CLICK: {
            const tableData = [...state.tableData];
            tableData.forEach((row, i) => {
                tableData[i] = [...row];
            });

            tableData[action.row][action.cell] = CODE.MINE_CLICK;

            return {
                ...state,
                tableData: tableData,
                halted: true
            };
        }
        case FLAG_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.MINE) {
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            return {
                ...state,
                tableData
            };
        }
        case QUESTION_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.FLAG_MINE) {
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
        }
        case NORMALIZE_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.QUESTION_MINE) {
                tableData[action.row][action.cell] = CODE.MINE;
            } else {
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
        }
        default:
            return state;
    }
};

const Minesweeper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, halted } = state;

    const value = { tableData, halted, dispatch };

    return (
        <>
            {
                //     halted ? (
                //     <div
                //         style={{
                //             display: "flex",
                //             height: "920px",
                //             justifyContent: "center",
                //             textAlign: "center",
                //             margin: "0 auto",
                //             alignItems: "center"
                //         }}
                //     >
                //         <span
                //             style={{
                //                 margin: "0 auto",
                //                 background: "rgb(255 0 0 / 50%)",
                //                 fontWeight: "bold",
                //                 fontSize: "40px",
                //                 color: "white",
                //                 padding: "12px",
                //                 borderRadius: "18px"
                //             }}
                //         >
                //             Game Over
                //         </span>
                //     </div>
                // ) : (
                <TableContext.Provider value={value}>
                    <Form></Form>
                    <Table></Table>
                </TableContext.Provider>
                // )}
            }
        </>
    );
};

export default Minesweeper;
