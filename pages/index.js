import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import { configureStore } from '../src/redux/configure-store';

class Index extends Component {
    static getInitialProps({ store, isServer, pathname, query }) {
        store.dispatch({ type: 'FOO', payload: 'foo' }); // component will be able to read from store's state when rendered
        return { custom: 'custom' }; // you can pass some custom props to component from here
    }

    render() {
        return (
            <div>
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
                <Link href="/about">
                    <a>About Page</a>
                </Link>
            </div>
        )
    }
}

Index = withRedux(configureStore, state => ({ foo: state.foo }))(Index);

export default Index;
