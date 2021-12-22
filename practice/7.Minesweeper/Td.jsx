import React from "react";

const Td = ({ cellData, rowIndex, cellIndex, onClickCell }) => {
    console.log(rowIndex, cellIndex);
    return (
        <td
            onClick={() => {
                onClickCell(rowIndex, cellIndex);
            }}
        >
            {rowIndex}
            {cellIndex}
            {cellData}
        </td>
    );
};

export default Td;
