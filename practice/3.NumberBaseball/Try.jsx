const React = require('react')

const Try = (props) => {
    console.log("props", props)
    const tries = props.tries
    return (
        <li>{tries.try} - {tries.resultText}</li>
    )
}

export default Try