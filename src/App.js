import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContatiner from "./containers/TodosContatiner";

function App() {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr />
      <TodosContatiner></TodosContatiner>
    </div>
  );
}

export default App;
