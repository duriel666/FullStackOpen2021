import React from 'react'


const App = () => {
  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }
  const Content = () => {
    return (
      <>
        <Part1 />
        <Part2 />
        <Part3 />
      </>
    )
  }
  const Part1 = () => {
    return (
      <><p>
        {part1} {exercises1}
      </p></>
    )
  }
  const Part2 = () => {
    return (
      <><p>
        {part2} {exercises2}
      </p></>
    )
  }
  const Part3 = () => {
    return (
      <><p>
        {part3} {exercises3}
      </p></>
    )
  }
  const Total = () => {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
  }
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App