import { useState } from 'react'

// StatisticLine Component

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
  )
}



// Statistics Component
const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  const all = props.neutral + props.bad + props.good
  const avgDen = props.bad + props.good
  const sumOfArray = (...args) => {
    return args.reduce((total, arg) => total + arg, 0);
  }
  const positive = sumOfArray(props.good)
  const negative = sumOfArray(props.bad)* -1
  const average = (positive + negative)/avgDen
  const positiveFeedback = (positive/all)*100

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={positiveFeedback + "%"}/>
      </tbody>
    </table>
    
  )

}
// Button Component
const Button = (props) => {
  return(
    
      <button onClick={() => props.setValue(props.value + 1)}>{props.text}</button> 
   
  )
}

// Main App Component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h1>give feedback</h1>
    <Button text="good" value={good} setValue={setGood}/>
    <Button text="neutral" value={neutral} setValue={setNeutral}/> 
    <Button text="bad" value={bad} setValue={setBad}/>  
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App