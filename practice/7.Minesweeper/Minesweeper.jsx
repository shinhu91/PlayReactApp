import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

export const CODE = {
  NORMAL: 0, // 지뢰 없는곳
  MINE: 1, // 지뢰 있는곳
  NORMAL_OPEN: 2, // 지뢰 없는곳 클릭
  MINE_OPEN: 3, // 지뢰 있는곳 클릭
};

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

const Minesweeper = () => {
  const [tableData, setTableData] = useState(mineSearchInit(5, 5, 10));

  const initGame = (row, col, mine) => {
    setTableData(mineSearchInit(row, col, mine));
  };

  const onClickCell = (rowIndex, cellIndex) => {
    const cellData = tableData[rowIndex][cellIndex];
    const newTableData = [...tableData];

    console.log(cellData);
    if (cellData === CODE.NORMAL) {
      newTableData[rowIndex][cellIndex] = CODE.NORMAL_OPEN;
      setTableData(newTableData);
    } else if (cellData === CODE.MINE) {
      newTableData[rowIndex][cellIndex] = CODE.MINE_OPEN;
      setTableData(newTableData);
    } else if (cellData === CODE.NORMAL_OPEN) {
    } else if (cellData === CODE.MINE_OPEN) {
    }
  };

  return (
    <>
      <Form initGame={initGame}></Form>
      <Table tableData={tableData} onClickCell={onClickCell}></Table>
    </>
  );
};

export default Minesweeper;
