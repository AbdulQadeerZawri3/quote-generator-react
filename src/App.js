import React, { Component } from 'react'
import axios from 'axios';
import "./App.css"


class App extends Component {

    state = { advice: '' };
    componentDidMount() {
        this.fetchAdvice();

    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });  
                // {advice } == {advice : advice}
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={() => this.fetchAdvice()}>
                        <span>I am Advice! </span>
                    </button>

                </div>

            </div>
        );
    }

}


export default App;



// a function belongs to a class is called method
