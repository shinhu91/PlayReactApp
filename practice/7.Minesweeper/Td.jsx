import React, { useCallback } from "react";
import { useContext } from "react/cjs/react.development";
import { CODE, OPEN_NORMAL, OPEN_MINE, TableContext } from "./Minesweeper";

const Td = ({ rowIndex, cellIndex }) => {
    const getStyledTd = (cellData) => {
        switch (cellData) {
            case CODE.NORAL:
                return {
                    backgroundColor: "white"
                };
            case CODE.MINE:
                return {
                    backgroundColor: "#eee"
                };
            case CODE.NORMAL_OPEN:
                return {
                    backgroundColor: "blue"
                };
            case CODE.MINE_OPEN:
                return {
                    backgroundColor: "red"
                };
            default:
                return {};
        }
    };

    const getTdText = useCallback((cellData, rowIndex, cellIndex) => {
        if (CODE.NORMAL == cellData) {
            return "";
        } else if (CODE.MINE == cellData) {
            return "";
        } else if (CODE.NORMAL_OPEN == cellData) {
            // 주변에 몇개의 지뢰가 있는지
            let mineCount = 0;
            return "O";
        } else if (CODE.MINE_OPEN == cellData) {
            return "X";
        }
    });

    const { tableData, dispatch } = useContext(TableContext);

    const onClickCell = useCallback(
        (cellData) => {
            switch (cellData) {
                case CODE.NORMAL_OPEN:
                case CODE.MINE_OPEN:
                case CODE.NORMAL:
                    dispatch({
                        type: OPEN_NORMAL,
                        row: rowIndex,
                        cell: cellIndex
                    });
                    return;
                case CODE.MINE:
                    dispatch({
                        type: OPEN_MINE,
                        row: rowIndex,
                        cell: cellIndex
                    });
                    return;
                default:
                    return;
            }
        },
        [tableData[rowIndex][cellIndex]]
    );
    return (
        <td
            style={getStyledTd(tableData[rowIndex][cellIndex])}
            onClick={() => {
                onClickCell(tableData[rowIndex][cellIndex]);
            }}
        >
            {rowIndex}
            {cellIndex}
            {tableData[rowIndex][cellIndex]}
        </td>
    );
};

export default Td;
