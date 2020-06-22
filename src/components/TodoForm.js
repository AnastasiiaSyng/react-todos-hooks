import React, { useState }from 'react';

export const TodoForm = ({saveTodo}) => {
    const [value, setValue] = useState('');
    
    return (
        <div>
            <form
                onSubmit={e => {
                e.preventDefault();
                saveTodo(value);
                setValue('');}}>
                <input 
                    placeholder='Add todo'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}>
                </input>
            </form>
        </div>
    )
}

export default TodoForm;