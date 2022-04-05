import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header>
      <h1>
        <a href='/'>
          WEB
        </a>
      </h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <nav>
        <ol>
          <li>
            <a href='/read/1'>html</a>
          </li>
          <li>
            <a href='/read/2'>css</a>
          </li>
          <li>
            <a href='/read/3'>JS</a>
          </li>
        </ol>
      </nav>
      <article>
        <h2>
          Welcome
        </h2>
        Hello, Web
      </article>
    </div>
  );
}

export default App;
