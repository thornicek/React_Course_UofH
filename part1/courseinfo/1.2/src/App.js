const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
       <Header course = {course} />
       <Content p1={part1} p2={part2} p3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}
// header component
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
// content component
const Content = (props) => {
  return(
  <div>
    <Part part={props.p1} exercises={props.ex1}/>
    <Part part={props.p2} exercises={props.ex2}/>
    <Part part={props.p3} exercises={props.ex3}/>
  </div>

  )
}
// total component
const Total = (props) =>{
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

// part
const Part = (props) =>{
  return(
   <p>{props.part} {props.exercises}</p> 
  )
}

export default App

