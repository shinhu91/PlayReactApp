const React = require('react')

import Try from './Try'

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const array = []
    for (let i = 0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
        array.push(chosen)
    }
    return array
}

const NumberBaseball = () => {

    const [answer, setAnswer] = React.useState(getNumbers);
    const [inputVal, setInputVal] = React.useState("");
    const [tries, setTries] = React.useState([]);

    const handleInputVal = (e) => {
        setInputVal(e.target.value)
    }

    const handleClickBtn = (e) => {
        e.preventDefault()
        if (inputVal === answer.join("")) {
            setAnswer(getNumbers)
            setInputVal("")
            setTries([])
        } else {
            const answerArray = inputVal.split("").map((v) => parseInt(v))
            let strike = 0
            let ball = 0
            if (tries.length >= 9) {
                alert(`10회 실패 답은 : ${answer.join("")} 였습니다.`)
                setAnswer(getNumbers)
                setInputVal("")
                setTries([])
            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1
                    }
                }
                setInputVal("")
                setTries([...tries, { try: inputVal, resultText: `${strike} 스트라이크 ${ball} 볼` }])
            }
        }
    }

    return (
        <>
            <div>{answer}</div>
            <div><input type="text" value={inputVal} onChange={handleInputVal} /> <button type='button' onClick={handleClickBtn}>입력</button></div>
            <div>
                <ul>
                    {tries.map((v, i) => (<Try key={i} tries={v}></Try>))}
                </ul>
            </div>
        </>
    )
}

export default NumberBaseball