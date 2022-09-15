import React, { Component } from 'react';
import { reducer } from './AppReducer';
import { randInt } from '../utils/random'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        gameStatus: '',
        number: 0,
        lower: 1,
        upper: 10,
        dispatch: (action) => this.setState((state) => reducer(state, action)),
    };

    componentDidMount() {
      this.setState({number: randInt(this.state.lower, this.state.upper)})
    }

    render() {
        return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
    }
}

export const Consumer = Context.Consumer;