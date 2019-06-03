import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>

    )
}



const Total = (props) => {
    const [eka, toka, kolmas] = props.parts
    const sum = (e1, e2, e3) => e1 + e2 + e3
    const total = sum(eka.exercises, toka.exercises, kolmas.exercises)
    return (
        <p>
            yhteensä {total} tehtävää
        </p>
    )
}

const Part = (props) => {
    return (
        <>
            {props.part} {props.exercises}
        </>
    )

}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10,
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    const Content = (props) => {
        const [eka, toka, kolmas] = props.parts
        return (
            <>
                <p>
                    <Part part={eka.name} exercises={eka.exercises} />
                </p>
                <p>
                    <Part part={toka.name} exercises={toka.exercises} />
                </p>
                <p>
                    <Part part={kolmas.name} exercises={kolmas.exercises} />
                </p>
            </>
        )
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
