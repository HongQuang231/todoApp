import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddToDo from "./AddTodo";

const Todos = () => {
  const [filter, setFilter] = useState([]);
  useEffect(
    () =>
      async function handlerGetTodo() {
        try {
          const res = await axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos",
            params: {
              _limit: 5,
            },
            headers: {
              token: localStorage.getItem("AccessToken"),
            },
          });
          setFilter([...res.data]);
        } catch (err) {
          console.log(err.message);
        }
      }, []
  );

  const handleDelete = async (id) => {
    try {
      const res = await axios({
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        method: "DELETE",
        headers: {
          token: localStorage.getItem("AccessToken"),
        },
      });
      console.log(res.status);
      const newList = filter.filter((item) => item.id !== id);
      setFilter([...newList]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleAdd = async (title) => {
    const data = {
      userId: 1,
      id: filter.length + 1,
      title,
      completed: false,
    };
    try {
      const res = await axios({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "POST",
        headers: {
          token: localStorage.getItem("AccessToken"),
        },
        data: JSON.stringify(data),
      });
      console.log(res.status);
      setFilter([...filter, data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AddToDo handleAdd={handleAdd} />
      {filter
        ? filter.map((item, idx) => {
            return (
              <div key={idx}>
                <TodoItem
                  id={item.id}
                  title={item.title}
                  completed={item.completed}
                  handleDelete={handleDelete}
                />
              </div>
            );
          })
        : "List is null"}
    </>
  );
};

export default Todos;
