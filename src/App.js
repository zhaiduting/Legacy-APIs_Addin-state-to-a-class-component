import { Component } from "react";

export default class Counter extends Component {
  state = {
    name: "Taylor",
    age: 42,
  };

  handleNameChange(e) { //如果不用箭头函数，那 onChange 的写法就有点小麻烦
    this.setState({
      name: e.target.value,
    });
  }

  handleAgeChange = () => { //应该使用箭头函数！
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={
            // this.handleNameChange // error
            () => this.handleNameChange(event) // 'event' is deprecated
            // this.handleNameChange.bind(this) // right
          }
        />
        <button onClick={this.handleAgeChange}>Increment age</button>
        <p>
          Hello, {this.state.name}. You are {this.state.age}.
        </p>
      </>
    );
  }
}
