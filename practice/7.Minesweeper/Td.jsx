import React, { useCallback } from "react";
import { CODE } from "./Minesweeper";

const Td = ({ cellData, rowIndex, cellIndex, onClickCell, tableData }) => {
  const getStyledTd = (cellData) => {
    switch (cellData) {
      case CODE.NORAL:
        return {
          backgroundColor: "white",
        };
      case CODE.MINE:
        return {
          backgroundColor: "#eee",
        };
      case CODE.NORMAL_OPEN:
        return {
          backgroundColor: "blue",
        };
      case CODE.MINE_OPEN:
        return {
          backgroundColor: "red",
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
      if (tableData[rowIndex][cellIndex - 1] == CODE.MINE) {
        // 왼쪽
        mineCount++;
      }
      if (tableData[rowIndex][cellIndex + 1] == CODE.MINE) {
        // 오른쪽
        mineCount++;
      }
      if (tableData[rowIndex - 1][cellIndex] == CODE.MINE) {
        // 위
        mineCount++;
      }
      if (tableData[rowIndex + 1][cellIndex] == CODE.MINE) {
        // 아래
        mineCount++;
      }
      if (tableData[rowIndex - 1][cellIndex - 1] == CODE.MINE) {
        // 대각선 왼쪽 위
        mineCount++;
      }
      if (tableData[rowIndex - 1][cellIndex + 1] == CODE.MINE) {
        // 대각선 오른쪽 위
        mineCount++;
      }
      if (tableData[rowIndex + 1][cellIndex - 1] == CODE.MINE) {
        // 대각선 왼쪽 아래
        mineCount++;
      }
      if (tableData[rowIndex + 1][cellIndex + 1] == CODE.MINE) {
        // 대각선 오른쪽 아래
        mineCount++;
      }

      console.log(mineCount);
      // 위아래
      // 대각선
      return "O";
    } else if (CODE.MINE_OPEN == cellData) {
      return "X";
    }
  });
  return (
    <td
      style={getStyledTd(cellData)}
      onClick={() => {
        onClickCell(rowIndex, cellIndex);
      }}
    >
      {rowIndex}
      {cellIndex}
      {/* {getTdText(cellData, rowIndex, cellIndex)} */}
    </td>
  );
};

export default Td;
