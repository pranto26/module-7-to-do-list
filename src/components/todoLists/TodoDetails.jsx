import React from 'react';
import BlockButton from "../Buttons/BlockButton";

const TodoDetails = ({
    todo,
    closeTodoDetails,
    changeTodoStatus,
    deleteTodo,
    editTodo,
  }) => {
    return (
        <div>
             <div className="card">
        <div className="card-header">
          <h4>Todo Details</h4>
        </div>
        <div className="card-body">
          <div className="info-block">
            <span className="todo-label">Name: </span>
            <span>{todo.name}</span>
          </div>
          <div className="info-block">
            <span className="todo-label">Descirption: </span>
            <span>{todo.description}</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col">
              <BlockButton
                btnClass="btn btn-outline-warning"
                onClick={closeTodoDetails}>
                Close
              </BlockButton>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col">
              <BlockButton
                btnClass={`btn btn-outline-${
                  todo.status ? "danger" : "success"
                }`}
                onClick={changeTodoStatus}>
                {todo.status ? "Incomplete" : "Complete"}
              </BlockButton>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col">
              <BlockButton btnClass="btn btn-outline-info" onClick={editTodo}>
                Edit
              </BlockButton>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col">
              <BlockButton
                btnClass="btn btn-outline-danger"
                onClick={deleteTodo}>
                Delete
              </BlockButton>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default TodoDetails;