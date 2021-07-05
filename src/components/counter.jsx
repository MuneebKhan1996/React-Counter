import React, { Component } from 'react';

class Counter extends Component {
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    styles = {
        fontSize: 20,
        fontWeight: 600
    }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1})
    // }

    // handleDecrement = () => {
    //     if(this.state.value > 0)
    //         this.setState({ value: this.state.value -1})
    //     else
    //         alert("Values can't be less than zero")
    // }

    render() { 
        return (
            <div>
                {this.props.children}
                <span style={this.styles} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary ml-5">Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger ml-5">Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 w-25 badge badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return  count === 0 ? 'Zero': count;
    }
}
 
export default Counter;