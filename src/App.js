import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo textTitle="Learn React" />
      <Todo textTitle="Learn English" />
      <Todo textTitle="Learn JS" />
    </div>
  );
}

export default App;
