import "./App.css";

function App() {
  return (
    <div className="Login-form">
      <form>
        <label>Email</label>
        <input type="text" name="email"></input>
        <br></br>
        <br></br> <label>Password</label>
        <input type="password" name="password"></input>
        <br></br>
      </form>
      <div className="Login-button">
        <button>
          <label>Login</label>
        </button>
      </div>
    </div>
  );
}

export default App;
