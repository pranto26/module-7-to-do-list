import { useState } from "react";
import Button from "./Buttons/Button";


const TodoForm = ({ todoData, action, saveTodo, updateTodo }) => {
  const [formData, setFormData] = useState(todoData);

  const saveInputData = (property, value) => {
    setFormData((prevData) => ({ ...prevData, [property]: value }));
  };

  const submitFormData = (e) => {
    e.preventDefault();
    if (action === "save") {
      saveTodo(formData);
    } else {
      updateTodo(formData);
    }
    emptyFormData();
  };

  const emptyFormData = () => {
    saveInputData("id", Date.now());
    saveInputData("name", "");
    saveInputData("description", "");
    saveInputData("status", false);
  };

  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h4 className="card-title">Todo Form</h4>
        </div>
        <div className="card-body">
          <form onSubmit={submitFormData}>
            {/* <input type="text" className="form-control" value={formData.id} /> */}
            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col mb-2">
                <div className="form-group mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => {
                      saveInputData("name", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col mb-2">
                <div className="form-group mb-2">
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    value={formData.description}
                    onChange={(e) =>
                      saveInputData("description", e.target.value)
                    }></textarea>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col text-end">
                <div className="form-group">
                  <Button btnClass="btn btn-outline-success">
                    {action === "save" ? "Save" : "Update"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;