import React from 'react';
import TodoForm from './components/ToDoForm';
import TodoDetails from './components/todoLists/TodoDetails';
import TodoLists from './components/todoLists/TodoLists';


const initialTodoLists = [
  {
    id: 1689542140982,
    name: "Todo 001",
    description: "Todo lists description 001",
    status: false,
  },
  {
    id: 1689542143054,
    name: "Todo 002",
    description: "Todo lists description 002",
    status: true,
  },
  {
    id: 1689542054582,
    name: "Todo 003",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quos vel qui porro magnam corporis repellendus minus aperiam libero sapiente hic assumenda optio quisquam impedit, labore non modi magni ipsum.",
    status: false,
  },
];

const todoFormModel = {
  id: Date.now(),
  name: "",
  description: "",
  status: false,
};

const App = () => {
  const [showTodoAddForm, setShowTodoAddForm] = useState(false);
  const [showTodoEditForm, setShowTodoEditForm] = useState(false);
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showTodoDetails, setShowTodoDetails] = useState(false);

  const toggleTodoForm = () => {
    setSelectedTodo(null);
    setShowTodoDetails(false);
    setShowTodoAddForm(!showTodoAddForm);
  };

  const saveTodo = (todoData) => {
    setTodoLists((prevTodoLists) => [...prevTodoLists, todoData]);
  };

  const saveSelectedTodo = (todo) => {
    setShowTodoAddForm(false);
    setSelectedTodo(todo);
    setShowTodoDetails(true);
  };

  const closeTodoDetails = () => {
    setSelectedTodo(null);
    setShowTodoDetails(false);
  };

  const changeTodoStatus = () => {
    const newTodo = todoLists.map((todo) => {
      if (todo.id === selectedTodo?.id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodoLists(newTodo);
  };

  const deleteTodo = () => {
    setTodoLists((prevTodoLists) =>
      prevTodoLists.filter((todo) => todo.id !== selectedTodo?.id)
    );
    setSelectedTodo(null);
    setShowTodoDetails(false);
  };

  const editTodo = () => {
    todoFormModel.id = selectedTodo?.id;
    todoFormModel.name = selectedTodo?.name;
    todoFormModel.description = selectedTodo?.description;
    todoFormModel.status = selectedTodo?.status;
    setShowTodoDetails(false);
    setShowTodoEditForm(true);
  };

  const updateTodo = (formData) => {
    const newTodo = todoLists.map((todo) => {
      if (todo.id === selectedTodo?.id) {
        todo.name = formData.name;
        todo.description = formData.description;
        todo.status = formData.status;
      }
      return todo;
    });
    setTodoLists(newTodo);
    setShowTodoDetails(true);
    setShowTodoEditForm(false);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col">
            <div className="d-grid">
              <button
                className={`btn btn-outline-${
                  showTodoAddForm ? "danger" : "success"
                } btn-block mb-2`}
                onClick={toggleTodoForm}>
                {showTodoAddForm ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faAdd} />
                )}
                &nbsp;{showTodoAddForm ? "Close" : "Add New Task"}
              </button>
            </div>
            {todoLists && (
              <TodoLists
                todoLists={todoLists}
                selectedTodo={selectedTodo}
                todoSelection={saveSelectedTodo}
              />
            )}
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col">
            {showTodoAddForm && (
              <TodoForm
                todoData={todoFormModel}
                action="save"
                saveTodo={saveTodo}
              />
            )}
            {showTodoEditForm && (
              <TodoForm
                todoData={todoFormModel}
                action="update"
                updateTodo={updateTodo}
              />
            )}
            {showTodoDetails && (
              <TodoDetails
                todo={selectedTodo}
                closeTodoDetails={closeTodoDetails}
                changeTodoStatus={changeTodoStatus}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;