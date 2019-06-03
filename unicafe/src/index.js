import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const sum = (good, neutral, bad) => {
    return good + neutral + bad
}

const average = (good, neutral, bad) => {
    return (good * 1 + bad * -1) / sum(good, neutral, bad)
}

const positive = (good, neutral, bad) => {
    return good / sum(good, neutral, bad) * 100
}

const Statistic = (props) => (
    <>
        {props.text} {props.stat} {props.m}
    </>
)

const Statistics = (props) => {
    if (sum(props.good, props.neutral, props.bad) !== 0) {
        return (
            <>
                <h3>Statistics</h3>
                <table>
                    <tbody>
                        <tr><td><Statistic text='Good'></Statistic></td><td><Statistic stat={props.good}></Statistic></td></tr>
                        <tr><td><Statistic text='Neutral'></Statistic></td><td><Statistic stat={props.neutral}></Statistic></td></tr>
                        <tr><td><Statistic text='Bad'></Statistic></td><td><Statistic stat={props.bad}></Statistic></td></tr>
                        <tr><td><Statistic text='Total'></Statistic></td><td><Statistic stat={sum(props.good, props.neutral, props.bad)}></Statistic></td></tr>
                        <tr><td><Statistic text='Average'></Statistic></td><td><Statistic stat={average(props.good, props.neutral, props.bad).toFixed(1)}></Statistic></td></tr>
                        <tr><td><Statistic text='Positive'></Statistic></td><td><Statistic stat={positive(props.good, props.neutral, props.bad).toFixed(1)} m=' %'></Statistic></td></tr>
                    </tbody>
                </table>
            </>
        )
    }
    return (
        <div>No reviews.</div>
    )

}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addGood = (newValue) => {
        setGood(newValue)
    }
    const addNeutral = (newValue) => {
        setNeutral(newValue)
    }
    const addBad = (newValue) => {
        setBad(newValue)
    }

    return (
        <div>
            <h2>Review us! How did we do today?</h2>
            <p><Button handleClick={() => addGood(good + 1)} text='Good'></Button>
                <Button handleClick={() => addNeutral(neutral + 1)} text='Neutral'></Button>
                <Button handleClick={() => addBad(bad + 1)} text='Bad'></Button></p>
            <div><Statistics good={good} neutral={neutral} bad={bad}></Statistics></div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

