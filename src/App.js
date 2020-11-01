import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const layout = useSelector(state => state.header.rows[0].columns);
  const fields = useSelector(state => state.schema.fields);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {/* <h4 className="App-logo">hello</h4> */}
        <img src={logo} className="App-logo" alt="logo" />
        <h2>the streambizz formcreator</h2>
        <div>
          <button className="Form-btn" onClick={() => dispatch({type: "ADD_NAME_FIELD"})}>
            Add name field
          </button>
          <button className="Form-btn" onClick={() => dispatch({type: "ADD_AGE_FIELD"})}>
            Add age field
          </button>
          <button className="Form-btn" onClick={() => dispatch({type: "RESET_FIELDS"})}>
            Reset fields
          </button>
          <Form layout={layout} fields={fields}/>
        </div>
      </header>
    </div>
  );
}

export default App;
