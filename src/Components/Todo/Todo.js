import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../../Actions/action';
import "./todo.css";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div>
                        <input className="addItems" type="text" placeholder="Add Items"
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />

                        <button className="todo-button" onClick={() => dispatch(addTodo(inputData),
                            setInputData(''))}>Add</button>


                    </div>

                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                            {/* <button onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="todo-button padding" data-sm-link-text="remove All"
                            onClick={() => dispatch(removeTodo())}>
                            <span>Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;