import React from 'react';
import Todo from "./Todo";

const TodoLists = ({ todoLists, selectedTodo, todoSelection }) => {
    return (
        <div>
            {todoLists.length === 0 ? (
        <div className="card mb-1">
          <div className="card-body p-10 text-bg-danger text-center">
            <h4>Todo lists not found</h4>
          </div>
        </div>
      ) : (
        todoLists.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            selectedTodo={selectedTodo}
            saveSelection={todoSelection}
          />
        ))
      )}
            
        </div>
    );
};

export default TodoLists;