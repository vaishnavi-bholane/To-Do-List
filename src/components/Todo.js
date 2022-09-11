import React from "react";

const Todo = ({text,todo, todos, setTodos }) => {

    //Events
    const deleteHandler = () => {

        //if returns true then that element remains otherwise it filters out of the array
        //the element we clicked gets == to the id then callback will return false and hence it filters out
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            //if the element you clicked did not mattch with item then return it without any changes
            return item;
        }))
    }


    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : '' }`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler}  className="trash-btn">
            <i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;