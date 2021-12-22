import React, { useState } from "react";

const Form = ({ initGame }) => {
    const [row, setRow] = useState("");
    const [col, setCol] = useState("");
    const [mine, setMine] = useState("");

    const onChangeRow = (e) => {
        setRow(e.target.value);
    };

    const onChangeCol = (e) => {
        setCol(e.target.value);
    };

    const onChangeMine = (e) => {
        setMine(e.target.value);
    };

    const onClickBtn = (e) => {
        if (row * col < mine) {
            alert("지뢰수가 지뢰판 보다 큽니다.");
            return;
        } else {
            initGame(row, col, mine);
        }
    };

    return (
        <div>
            <span>가로 행</span> :{" "}
            <input onChange={onChangeRow} value={row}></input>
            <span>세로 행</span> :{" "}
            <input onChange={onChangeCol} value={col}></input>
            <span>지뢰 수</span>{" "}
            <input onChange={onChangeMine} value={mine}></input>
            <button onClick={onClickBtn}>입력</button>
        </div>
    );
};

export default Form;
