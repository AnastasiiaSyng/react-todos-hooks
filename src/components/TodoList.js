import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const TodoList = ({todos, deleteTodo, completeTodo}) => {
    return (
        <div>
            <Table responsive>
                <tbody>
                    {todos.map((todo, index) => (
                    <tr key={index} style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                    <td> {todo.text} </td>
                    <td> <Button variant="outline-success" onClick={(e)=>completeTodo(index)}>Done</Button></td>
                    <td><Button variant="danger" onClick={(e) => deleteTodo(index)}>Delete</Button></td>
                    </tr>
                    ))}
                </tbody>
         </Table>
        </div>
           
    )
}

export default TodoList;