import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {  
    counters: [
      {id: 1, value: 10},
      {id: 2, value: 0},
      {id: 3, value: 150},
      {id: 4, value: 0}
    ]
  }

  constructor(){
    super();
    console.log("App Constructor");
  }

  componentDidMount(){
    console.log("mounting phase");
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({counters})
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  }

  render(){
    console.log("app rendered");
    return (
      <React.Fragment>
        <Navbar totalCounter = {this.state.counters.filter( c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement}
            onDelete = {this.handleDelete }
          />
        </main>
      </React.Fragment>
    );
  }
};

export default App;
