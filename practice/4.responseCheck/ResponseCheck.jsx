import React, { Component, useRef } from "react";

// class ResponseCheck extends Component {
//     state = {
//         state: "waiting",
//         message: "클릭해서 시작하세요.",
//         result: []
//     }
//     timer
//     startTime
//     endTime
//     onClickScreen = () => {
//         const { state, message, result } = this.state
//         if (state == "waiting") {
//             this.setState({
//                 state: "ready",
//                 message: "초록색이 되면 클릭하세요.",
//             })
//             this.timer = setTimeout(() => {
//                 this.setState({
//                     state: "now",
//                     message: "지금 클릭 !!",
//                 })
//                 this.startTime = new Date()
//             }, Math.floor(Math.random() * 1000) + 2000);
//         } else if (state == "ready") {
//             clearTimeout(this.timer)
//             this.setState({
//                 state: "waiting",
//                 message: "너무 빨리 클릭 했습니다. 다시 시작 하세요.",
//             })
//         } else if (state == "now") {
//             this.endTime = new Date()
//             this.setState((prevState) => {
//                 return {
//                     state: "waiting",
//                     message: "클릭해서 시작하세요.",
//                     result: [...prevState.result, this.endTime - this.startTime]
//                 }
//             })
//         }
//     }

//     onReset = () => {
//         this.setState({
//             state: "waiting",
//             message: "클릭해서 시작하세요",
//             result: []
//         })
//     }

//     render() {
//         return (
//             <>
//                 <div id="screen"
//                     className={this.state.state}
//                     onClick={this.onClickScreen}
//                 >
//                     {this.state.message}
//                 </div>
//                 {
//                     this.state.result.length === 0
//                         ? null
//                         : <>
//                             <div>평균시간 : {this.state.result.reduce((a, c) => a + c) / this.state.result.length} ms</div>
//                             <button onClick={this.onReset}>리셋</button>
//                         </>
//                 }
//             </>
//         )
//     }
// }

const ResponseCheck = () => {
    const [state, setState] = React.useState("waiting")
    const [message, setMessage] = React.useState("클릭해서 시작하세요.")
    const [result, setResult] = React.useState([])
    const timer = useRef(null)
    const startTime = useRef()
    const endTime = useRef()

    const onClickScreen = () => {
        if (state == "waiting") {
            setState("ready")
            setMessage("초록색이 되면 클릭하세요.")
            timer.current = setTimeout(() => {
                setState("now")
                setMessage("지금 클릭 !!")
                startTime.current = new Date()
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state == "ready") {
            clearTimeout(timer.current)
            setState("waiting")
            setMessage("너무 빨리 클릭 했습니다. 다시 시작 하세요.")
        } else if (state == "now") {
            endTime.current = new Date()
            setState("waiting")
            setMessage("클릭해서 시작하세요.")
            setResult((prevState) => ([...prevState, endTime.current - startTime.current]))

        }
    }

    const onReset = () => {
        setState("waiting")
        setMessage("클릭해서 시작하세요")
        setResult([])
    }

    return (
        <>
            <div id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {
                result.length === 0
                    ? null
                    : <>
                        <div>평균시간 : {result.reduce((a, c) => a + c) / result.length} ms</div>
                        <button onClick={onReset}>리셋</button>
                    </>
            }
        </>
    )
}

export default ResponseCheck