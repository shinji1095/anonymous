import React, { Component } from 'react'
import Card from './card'

export default class CardHolder extends Component {
    render() {
        return (
            <>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </>
        )
    }
}
