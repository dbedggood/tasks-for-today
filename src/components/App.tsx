import React from 'react'
import './App.css'
import ProgressBar from './ProgressBar/ProgressBar'
import TodoList from './TodoList/TodoList'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks for Today</h1>
        <ProgressBar />
        <TodoList />
        <TodoList />
      </header>
    </div>
  )
}

export default App
