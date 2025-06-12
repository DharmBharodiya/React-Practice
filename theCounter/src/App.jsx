import React, {useState} from "react"
import ReactDOM from "react-dom/client"
import Title from "./components/Title"
import Counter from "./components/Counter"

function App(){
  return (
    <>
      <Title actualTitle="Welcome to the " spanTitle="counter"/>
      <Counter />
      <Title actualTitle="The end" />
    </>
  );
}

export default App;

