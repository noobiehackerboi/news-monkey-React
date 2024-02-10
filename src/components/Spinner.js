import React, { Component } from 'react'
import Loader from './loader.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img className='my-4' src={Loader} alt="Spinner" style={{ height: '200px' }} />
            </div>
        )
    }
}
