import { useState } from 'react'

// next button component
const Button = (props) => {
  const min = 0
  const max = props.anecdotes.length
  const randomNumber = (min,max) =>{
    return Math.floor(Math.random()* (max-min)+min)
  }
  return(
    
    <button onClick={() => props.setValue(randomNumber(min,max))}>next anecdote</button> 
 
)
}

// vote button component
const Vote = (props) => {
    return(
    <button onClick={() => props.setValue(props.selected,props.vote[props.selected]+1, props.vote, props.voteSelected)}>Vote</button>
    )
}

// main App component
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
const [selected, setSelected] = useState(0)
const [vote, voteSelected] = useState(Array(anecdotes.length).fill(0))

// helper function to record the vote in array
const setArrayValue = (index, value, array, array_setter) =>{
  const copy = [...array]
  copy[index] = value
  array_setter(copy)
}
// helper function to find the index of the first max value of the array
const setArrayIndex = (array) =>{
  const max = Math.max(...array)
  const index = array.indexOf(max)
  return index   
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>
        <Button setValue={setSelected} anecdotes={anecdotes}/>
        <Vote setValue={setArrayValue} selected={selected} vote={vote} voteSelected={voteSelected} />
      </p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[setArrayIndex(vote)]}</p>
    </div>
  )
}

export default App