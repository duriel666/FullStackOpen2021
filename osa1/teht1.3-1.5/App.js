import React from 'react'


const App = () => {
  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
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
        {course.parts[0].name} {course.parts[0].exercises}
      </p></>
    )
  }
  const Part2 = () => {
    return (
      <><p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p></>
    )
  }
  const Part3 = () => {
    return (
      <><p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p></>
    )
  }

  const Total = () => {
    return (
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    )
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App