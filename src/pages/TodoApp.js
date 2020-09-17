import React, { useState } from "react";

export default function TodoApp() {
  // state
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  // changeHandler textInput
  let handleChange = (event) => {
    setInputText(event.target.value);
    // console.log();
  };

  // add todo function
  const todoAdd = (e) => {
    e.preventDefault()
    let newTodo = {};
    if (inputText.length < 1) {
      alert("invalid input");
    } else {
      if (todo.length < 1) {
        newTodo = {
          id: 1,
          todo: inputText,
        };
        setTodo([...todo, newTodo]);
        setInputText("");
      } else {
        newTodo = {
          id: todo[todo.length - 1].id + 1,
          todo: inputText,
        };
        setTodo([...todo, newTodo]);
        setInputText("");
      }
    }
  };
  console.log("todo", todo);

  // delete todo function
  // const deleteTodo = (item) => {
  //   let newDelTodo = todo.filter((itemDel) => itemDel.id !== item.id);
  //   setTodo(newDelTodo);
  //   console.log(newDelTodo);
  // };

  const deleteTodo = (index) => {
    // console.log("id", id);
    console.log("todoDel", todo);
    // let index = id - 1;
    console.log("index", index);
    let newDelTodo = [...todo];
    let delTodo = newDelTodo.splice(index, 1);
    setTodo(newDelTodo);
    console.log(newDelTodo);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <h1>To do app </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className="form-group " action="">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                type="text"
                onChange={handleChange}
                value={inputText}
                autoComplete="off"
                placeholder="What to do?"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-success"
                  type="submit"
                  onClick={todoAdd}
                >
                  +
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6">
          <ul className="list-group text-dark">
            {todo.map((item, index) => (
              <li key={item.id} className="list-group-item">
                {item.todo}
                <span
                  className="btn btn-danger float-right"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
