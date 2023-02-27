import { Link, useNavigate } from "react-router-dom";
import './App.css';
import { Router } from "./Routes";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await auth.signOut();
    navigate('/');
  }

  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/private'>Página Privada</Link>
          {auth.user && <button onClick={handleLogOut}>Sair</button>}
          
        </nav>
      </header>
      <hr />
        <Router />
    </div>

  )
}

export default App;