import React, { useCallback } from "react";
import { useContext } from "react/cjs/react.development";
import { CODE, NORMAL_CLICK, MINE_CLICK, TableContext } from "./Minesweeper";

const Td = ({ rowIndex, cellIndex }) => {
    const getStyledTd = (cellData) => {
        switch (cellData) {
            case CODE.NORMAL:
                return {
                    backgroundColor: "white"
                };
            case CODE.MINE:
                return {
                    backgroundColor: "#eee"
                };
            case CODE.OPENED:
                return {
                    backgroundColor: "#3a7644",
                    color: "#fff"
                };
            case CODE.MINE_CLICK:
                return {
                    backgroundColor: "red"
                };
            default:
                return {
                    backgroundColor: "#3a7644",
                    color: "#fff"
                };
        }
    };

    const getTdText = useCallback((cellData) => {
        switch (cellData) {
            case CODE.NORMAL:
                return "";
            case CODE.MINE:
                return "";
            case CODE.OPENED:
                return "";
            case CODE.MINE_CLICK:
                return "💣";
            default:
                return cellData;
        }
    });

    const { tableData, dispatch, halted } = useContext(TableContext);

    const onClickCell = useCallback(
        (cellData) => {
            if (halted) {
                return;
            }
            switch (cellData) {
                case CODE.NORMAL_OPEN:
                case CODE.MINE_OPEN:
                case CODE.NORMAL:
                    dispatch({
                        type: NORMAL_CLICK,
                        row: rowIndex,
                        cell: cellIndex
                    });
                    return;
                case CODE.MINE:
                    dispatch({
                        type: MINE_CLICK,
                        row: rowIndex,
                        cell: cellIndex
                    });
                    return;
                default:
                    return;
            }
        },
        [tableData[rowIndex][cellIndex], halted]
    );
    return (
        <td
            style={getStyledTd(tableData[rowIndex][cellIndex])}
            onClick={() => {
                onClickCell(tableData[rowIndex][cellIndex]);
            }}
        >
            {/* {rowIndex}
            {cellIndex} */}
            {/* {tableData[rowIndex][cellIndex]} */}
            {getTdText(tableData[rowIndex][cellIndex])}
        </td>
    );
};

export default Td;
