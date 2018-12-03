import React, { Component } from 'react';
import students from './components/students.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
            this.state = {
                students: null
            }
    }
    async componentDidMount() {
        fetch('https://students102.herokuapp.com/')
        .then(response => response.json())
        .then(students => this.setState({ students }))
    }
    render() {
        return (
            <div className="App">
                <students students={this.students} />
            </div>
        );
    }
}

export default App;
