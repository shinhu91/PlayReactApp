import React from "react";
import { useContext } from "react/cjs/react.development";
import { TableContext } from "./Minesweeper";
import Td from "./Td";

const Tr = ({ rowIndex }) => {
    const { tableData } = useContext(TableContext);
    return (
        <tr>
            {Array(tableData[0].length)
                .fill()
                .map((v, i) => {
                    return <Td rowIndex={rowIndex} cellIndex={i}></Td>;
                })}
        </tr>
    );
};

export default Tr;
