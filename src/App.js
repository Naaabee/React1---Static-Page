import './App.css';
import './React_logo_wordmark.png'

function App() {
  return (
    <>
      <img src={require("./React_logo_wordmark.png")} alt='react-logo' width={'150px'}/>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
}

export default App;
