import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import NoTodos from './components/NoTodos.js';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Leave this country',
            completed: false,
        },
        {
            text: 'Never come back',
            completed: false
        },
        {
            text: 'Love Kostya',
            completed: true
        }
    ]);

    return (
      <div className='container'>
        <h1>TODOs</h1>
        <TodoForm 
            saveTodo = {todoText => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
            setTodos([...todos, { text: trimmedText, completed: false }]);
            }}}
        /> 
        { (todos.length>0) &&
        <TodoList 
            todos={todos} 
            deleteTodo = {todoIndex => {
            const newTodos = [...todos];
            newTodos.splice(todoIndex, 1);            
            setTodos(newTodos);
            }}
            completeTodo = { todoIndex => {
            const newTodos = [...todos];
            newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
            setTodos(newTodos);
            }}
        />
        } 
        { (todos.length === 0) && <NoTodos />}
      </div>
    );
}
export default App;
