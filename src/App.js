import React from "react";
import TodoApp from "./TodoApp";

function App() {
  return <TodoApp />;
}

export default App;

// https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14541216#questions/9496842
/*
Daniel Maixner
Daniel
8 months ago
2
It's not my favorite solution, but if you go to the index.js file and remove the <React.Strictmode>

tags wrapping the <App /> tag, it will stop the error message. I believe the problem is something Google will need to resolve in all of their components.
*/