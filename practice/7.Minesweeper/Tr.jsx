import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, onClickCell }) => {
    return (
        <tr>
            {rowData.map((v, i) => {
                return (
                    <Td
                        cellData={v}
                        rowIndex={rowIndex}
                        cellIndex={i}
                        onClickCell={onClickCell}
                    ></Td>
                );
            })}
        </tr>
    );
};

export default Tr;
