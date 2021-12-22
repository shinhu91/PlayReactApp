import React from "react";
import Tr from "./Tr";

const Table = ({ tableData, onClickCell }) => {
    return (
        <table>
            {tableData.map((v, i) => {
                return (
                    <Tr rowData={v} rowIndex={i} onClickCell={onClickCell}></Tr>
                );
            })}
        </table>
    );
};

export default Table;
