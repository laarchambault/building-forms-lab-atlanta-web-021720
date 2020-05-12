import React, { Component } from 'react'

export default class Band extends Component {
    listBands = bands => {
        return bands.map( band => <li key={band.name}>{band.name}</li>)
    }

    render() {
        return (
            <ul>
                {this.listBands(this.props.bands)}
            </ul>
        )
    }
}