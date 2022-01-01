import React from "react";
import {
    BrowserRouter,
    HashRouter,
    Link,
    Switch,
    Routes,
    Route
} from "react-router-dom";
import { useParams } from "react-router";

import ResponseCheck from "./4.responseCheck/ResponseCheck"; // 반응속도 체크
import Rsp from "./5.RSP/Rsp"; // 가위 바위 보
import Lotto from "./6.Lotto/Lotto"; // 로또
import Minesweeper from "./7.Minesweeper/Minesweeper"; // 지뢰 찾기
import GameMatcher from "./GameMatcher";

const Games = () => {
    return (
        <BrowserRouter>
            {/* <Link to="/response-check">야구게임</Link>
            &nbsp;
            <Link to="/rsp">가위 바위 보</Link>
            &nbsp;
            <Link to="/lotto">로또</Link>
            &nbsp;
            <Link to="/mine-search">지뢰 찾기</Link>
            <Routes>
                <Route path="/game/:name/response-check" element={<ResponseCheck />} />
                <Route path="/game/:name/rsp" element={<Rsp />} />
                <Route path="/game/:name/response-check" element={<Lotto />} />
                <Route path="/game/:name/" element={<Minesweeper />} />
            </Routes> */}
            <Link to="/game/response-check">야구게임</Link>
            &nbsp;
            <Link to="/game/rsp">가위 바위 보</Link>
            &nbsp;
            <Link to="/game/lotto">로또</Link>
            &nbsp;
            <Link to="/game/mine-search">지뢰 찾기</Link>
            <Routes>
                <Route path="/game/:name/" element={<GameMatcher />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Games;
