import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo textTitle="Learn English" />
      <Todo textTitle="Learn JS" />
      <Todo textTitle="Learn React" />
    </div>
  );
}

export default App;
