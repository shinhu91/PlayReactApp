import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, onClickCell, tableData }) => {
  return (
    <tr>
      {rowData.map((v, i) => {
        return (
          <Td
            cellData={v}
            rowIndex={rowIndex}
            cellIndex={i}
            onClickCell={onClickCell}
            tableData={tableData}
          ></Td>
        );
      })}
    </tr>
  );
};

export default Tr;
