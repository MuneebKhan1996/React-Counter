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
        console.log("counter here")
        return (
            <div className="counter_wrapper m-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1 w-100">
                            {this.props.children}
                            <span style={this.styles} className={this.getBadgeClasses()} >{this.formatCount()}</span>
                        </div>
                        <div className="col-sm-5">
                            <button 
                                onClick={() => this.props.onIncrement(this.props.counter)} 
                                className="btn btn-secondary mx-2">+
                            </button>
                        {/* </div>
                        <div className="col-sm-1"> */}
                            <button 
                                onClick={() => this.props.onDecrement(this.props.counter)} 
                                className="btn btn-secondary mx-2"
                                disabled={this.props.counter.value === 0 ? 'Disabled' : ''}
                                >-
                            </button>
                        {/* </div>
                        <div className="col-sm-1"> */}
                            <button
                                onClick={() => this.props.onDelete(this.props.counter.id)} 
                                className="btn btn-danger mx-2">X
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "w-100 h-100 badge badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return  count === 0 ? 'Zero': count;
    }
}
 
export default Counter;