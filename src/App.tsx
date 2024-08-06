import "./App.css";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <>
      <h1>List of Users</h1>
      <div>
        <ListUsers />
      </div>
      <p className="read-the-docs">
        Here is an example of the implementation for JsonPlaceHolder endpoint
      </p>
    </>
  );
}

export default App;
