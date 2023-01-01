import React from "react";
export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    // The componentDidMount() method runs after the component output has been rendered to the DOM.
    // This is a good place to set up a timer:
    componentDidMount() {
        this.timerID = setInterval(()=>this.timer(), 1000)
    }
    // We will tear down the timer in the componentWillUnmount() lifecycle method:
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    timer(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}