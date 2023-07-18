import React from 'react';

import '../todoLists/To.css'

const Todo = ({ todo, selectedTodo, saveSelection }) => {
    const isSelected = todo.id === selectedTodo?.id ? true : false;
    return (
       <>
       <div
        className={`card mb-1 ${isSelected ? "selected" : ""}`}
        onClick={() => saveSelection(todo)}>
        <div className="card-body px-2 py-2">
          <div className="d-flex">
            <div className="px-1 flex-grow-1">
              <div className="firend-name">
                <FontAwesomeIcon icon={faList} />
                &nbsp; {todo.name}
              </div>
            </div>
            <div className="px-1 mw-100 align-self-center">
              <span
                className={`badge ${
                  todo.status ? "bg-success" : "bg-danger"
                } p-2`}>
                {todo.status ? "Complete" : "Incomplete"}
              </span>
            </div>
          </div>
        </div>
      </div>
       </>
    );
};

export default Todo;