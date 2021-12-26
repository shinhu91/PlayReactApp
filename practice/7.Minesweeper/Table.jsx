import React, { useContext } from "react";
import { TableContext } from "./Minesweeper";
import Tr from "./Tr";

const Table = () => {
    const { tableData, dispatch } = useContext(TableContext);
    return (
        <table>
            {tableData.map((v, i) => {
                return <Tr rowIndex={i}></Tr>;
            })}
        </table>
    );
};

export default Table;
