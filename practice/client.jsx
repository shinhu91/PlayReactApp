import React from "react"
import ReactDOM from "react-dom"

import ResponseCheck from './4.responseCheck/ResponseCheck' // 반응속도 체크
import Rsp from './5.RSP/Rsp' // 가위 바위 보
import Lotto from './6.Lotto/Lotto' // 로또
import Minesweeper from './7.Minesweeper/Minesweeper'// 지뢰 찾기



ReactDOM.render(<Minesweeper />, document.querySelector("#root"))
