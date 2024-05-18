import logo from './logo.svg';
import './styles/App.scss';
import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./actions/action.js";

function App(props) {
  const handleIncreaseClick = () => {
    props.increaseCounterBtn()
  }
  const handleDecreaseClick = () => {
    props.decreaseCounter()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World with {props.abc} !!! </h2>
        <div>Count: {props.count}</div>

        <button onClick={() => handleIncreaseClick()}>Increase Count</button>

        <button onClick={() => handleDecreaseClick()}>Decrease Count</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // key : value,
    count: state.counter.count,
    abc: state.counter.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounterBtn: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),

  }
}
/*
connect : Nó không sửa đổi lớp thành phần được truyền cho nó; 
thay vào đó, nó trả về một lớp thành phần mới (mapStateToProps  và mapDispatchToProps) được kết nối bao bọc thành phần (App) bạn đã truyền vào.
Có 4 thành phần của connect chấp nhận : 
  * mapStateToProps (function ())
  * mapDispatchToProps (function() or object)
  * mergeProps (function ())
  * options (object)


*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
