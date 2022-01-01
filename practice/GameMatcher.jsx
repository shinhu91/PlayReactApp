import React from "react";
import { Routes, useParams, Route } from "react-router";

import ResponseCheck from "./4.responseCheck/ResponseCheck"; // 반응속도 체크
import Rsp from "./5.RSP/Rsp"; // 가위 바위 보
import Lotto from "./6.Lotto/Lotto"; // 로또
import Minesweeper from "./7.Minesweeper/Minesweeper"; // 지뢰 찾기

const GameMatcher = () => {
    let params = useParams();
    console.log(params.name);
    // if (params.name === "response-check") {
    //     return <ResponseCheck></ResponseCheck>;
    // } else if (params.name === "rsp") {
    //     return <Rsp></Rsp>;
    // } else if (params.name === "lotto") {
    //     return <Lotto></Lotto>;
    // } else if (params.name === "mine-search") {
    //     return <Minesweeper></Minesweeper>;
    // } else {
    //     return <div>페이지 오류</div>;
    // }

    return (
        <Routes>
            <Route path="response-check" element={<ResponseCheck />} />
            <Route path="rsp" element={<Rsp />} />
            <Route path="lotto" element={<Lotto />} />
            <Route path="mine-search" element={<Minesweeper />} />
        </Routes>
    );
};

export default GameMatcher;
