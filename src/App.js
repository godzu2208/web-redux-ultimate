import logo from './logo.svg';
import './styles/App.scss';
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./actions/action.js";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World !!! </h2>
        <div>Count: {props.count}</div>

        <button onClick={() => props.increaseCounter()}>Increase Count</button>

        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
