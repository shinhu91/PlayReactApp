const React = require('react')

const WordRelay = () => {
    const [word, setWord] = React.useState("시누2")
    const [value, setValue] = React.useState("")
    const [result, setResult] = React.useState("")

    handleInputChange = (e) => {
        setValue(e.target.value)
    }

    handleBtnClick = (answer) => {
        setValue("")
        if (answer[0] == word[word.length - 1]) {
            setResult("정답")
            setWord(answer)
        } else {
            setResult("오답")
        }
    }

    return (
        <>
            <div>{word}</div>
            <div><input type="text" value={value} onChange={handleInputChange} /><button onClick={() => { handleBtnClick(value) }}>입력</button></div>
            <div>{result}</div>
        </>
    )
}

module.exports = WordRelay