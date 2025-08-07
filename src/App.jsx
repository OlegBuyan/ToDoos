import { TODOOS } from "./components/shared/constant";
import { useEffect, useState } from "react";
import { Todolist, NotFaund, TodoItem } from "./components";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todolist />} />
        <Route path="/:id" element={<TodoItem />} />
        <Route path="/404-not-found" element={<NotFaund />} />
      </Routes>
    </>
  );
}

export default App;
