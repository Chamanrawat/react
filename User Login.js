import { useState } from "react";
import ReactDOM from "react-dom/client";
//import styles from './my-style.module.css';

function MyForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name == "Chaman" && password == "ram@12") {
      // alert(`The name you entered was: ${name}`);
      //alert(`The password you entered was: ${password}`);
      alert(`Your Account is Login`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          style={{ width: "40%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Enter your password:
        <input
          style={{ width: "40%" }}
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <br />
      <div style={{ marginLeft: "350px" }}>
        <input type="submit" />
      </div>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);
