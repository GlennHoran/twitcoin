import React, { Component } from 'react'
import axios from 'axios'

class httpTest extends Component {
    constructor () {
        super()
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick () {
        console.log('Success!')
        axios.get('https://limitless-dawn-80311.herokuapp.com/reading/')
            .then(response => console.log(response))
    }
    render () {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}
export default httpTest