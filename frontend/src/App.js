import logo from './logo.svg';
import './styles/App.scss';
// import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./actions/action.js";

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector(
    (state) => {
      return state.counter.count
    }
  );
  const fetchAllUser = async () => {
    const res = await axios.get('http://localhost:8080/users/all')
    const data = res && res.data ? res.data : [];
    console.log(">>> check data res : ", data)
  }

  useEffect(() => {
    fetchAllUser();
  })
  const handleIncreaseClick = () => {
    // props.increaseCounterBtn()
    dispatch(increaseCounter())
  }
  // const handleDecreaseClick = () => {
  //   // props.decreaseCounter()
  //   dispatch(decreaseCounter())
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World with {props.abc} !!! </h2>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncreaseClick()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     // key : value,
//     count: state.counter.count,
//     abc: state.counter.name,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounterBtn: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),

//   }
// }
/*
connect : Nó không sửa đổi lớp thành phần được truyền cho nó; 
thay vào đó, nó trả về một lớp thành phần mới (mapStateToProps  và mapDispatchToProps) được kết nối bao bọc thành phần (App) bạn đã truyền vào.
Có 4 thành phần của connect chấp nhận : 
  * mapStateToProps (function ())
  * mapDispatchToProps (function() or object)
  * mergeProps (function ())
  * options (object)


*/
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
