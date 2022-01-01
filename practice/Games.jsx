import React from "react";
import {
    BrowserRouter,
    HashRouter,
    Link,
    Switch,
    Routes,
    Route
} from "react-router-dom";

import ResponseCheck from "./4.responseCheck/ResponseCheck"; // 반응속도 체크
import Rsp from "./5.RSP/Rsp"; // 가위 바위 보
import Lotto from "./6.Lotto/Lotto"; // 로또
import Minesweeper from "./7.Minesweeper/Minesweeper"; // 지뢰 찾기

const Games = () => {
    return (
        <BrowserRouter>
            <Link to="/response-check">야구게임</Link>
            &nbsp;
            <Link to="/rsp">가위 바위 보</Link>
            &nbsp;
            <Link to="/lotto">로또</Link>
            &nbsp;
            <Link to="/mine-search">지뢰 찾기</Link>
            <Routes>
                <Route path="/response-check" element={<ResponseCheck />} />
                <Route path="/rsp" element={<Rsp />} />
                <Route path="/response-check" element={<Lotto />} />
                <Route path="/mine-search" element={<Minesweeper />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Games;
