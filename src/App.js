import { Component } from 'react';
import './App.css';
import logo from './images/logo1.png';
import logo2 from './images/binlogo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key, value) {
    this.setState({
      [key]:value
    });
  }
  addItem() {
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list= [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem:""
    })
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList});
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Task List</h1>
          <br/>
          <input
            type="text"
            placeholder="Enter a new task"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button className="Submit" onClick={() => this.addItem()}>
            Create
          </button>
          <br/>
          <img src={logo} />
          <ul className='TaskList'>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    <img src={logo2} />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
