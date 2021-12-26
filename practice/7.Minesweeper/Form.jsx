import React, { useContext, useState } from "react";
import { START_GAME, TableContext } from "./Minesweeper";

const Form = ({ initGame }) => {
    const [row, setRow] = useState("");
    const [cell, setCell] = useState("");
    const [mine, setMine] = useState("");
    const { tableData, dispatch } = useContext(TableContext);

    const onChangeRow = (e) => {
        setRow(e.target.value);
    };

    const onChangeCell = (e) => {
        setCell(e.target.value);
    };

    const onChangeMine = (e) => {
        setMine(e.target.value);
    };

    const onClickBtn = (e) => {
        if (row * cell < mine) {
            alert("지뢰수가 지뢰판 보다 큽니다.");
            return;
        } else {
            dispatch({ type: START_GAME, row: row, cell: cell, mine: mine });
        }
    };

    return (
        <div>
            <span>가로 행</span> :{" "}
            <input onChange={onChangeRow} value={row}></input>
            <span>세로 행</span> :{" "}
            <input onChange={onChangeCell} value={cell}></input>
            <span>지뢰 수</span>{" "}
            <input onChange={onChangeMine} value={mine}></input>
            <button onClick={onClickBtn}>입력</button>
        </div>
    );
};

export default Form;
