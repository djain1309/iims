import './App.css';
import Forms from './Forms';

function App() {
  return (
    <div className="App">
      <nav style={{background: 'beige', height: "50px"}}>
        <b>Integrated Incident Management System (IIMS)</b>
      </nav>
      <div>
        <div style={{float: 'left', width: '60%', height: '695px'}}>
          Green Block
        </div>
      </div>
      <div>
        <div style={{float: 'right', width: '40%', height: '695px'}}>
        <Forms /> 

        </div>
      </div>
    </div>
  );
}

export default App;
