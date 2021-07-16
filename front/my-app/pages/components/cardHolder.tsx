import React, { Component } from 'react'
import Card from './card'

export default class CardHolder extends Component {
    render() {
        return (
            <>
                <Card key={1}/>
                <Card key={2}/>
                <Card key={3}/>
                <Card key={4}/>
            </>
        )
    }
}
