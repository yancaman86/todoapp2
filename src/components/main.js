import React, { useState, useEffect } from "react";
import Table from "./table";
import dbs from "./db.json";

function Main() {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addInput = () => {
    if (input !== "") {
      const newInput = {
        id: nextId,
        title: input
      };
      setInputs([...inputs, newInput]);
      setInput("");
      setNextId(nextId + 1);
    }
  };




  const deleteInput = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setInputs(dbs);

    const maxId = dbs.reduce((max, input) => (input.id > max ? input.id : max), 0);
    setNextId(maxId + 1);
  }, []);

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className=" ">
        <table />
        <h1>Search Box</h1>
        <div>
          <input
            type="text"
            placeholder="Enter"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="add-button" onClick={addInput}>
            Submit
          </button>
          <Table inputs={inputs}  />
        </div>
        <ul className="todo-list">
          {inputs.map((input) => (
            <div className="input" key={input.id}>
              <li>{input.title}</li>
              <button
                className="delete-button"
                onClick={() => {
                  deleteInput(input.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Main;