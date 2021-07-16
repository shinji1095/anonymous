import React, { Component } from 'react';
import Link from 'next/link';

import App from './app';
import Login from './login';

class Index extends Component {
    render() {
        return (
            <div>
                <Link href="/">
                    <App />
                </Link>
            </div>
        );
    }
}

export default Index;
