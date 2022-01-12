import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
    render() {
        return (
            <div className='jumbotron text-left' >
            <h1 className='display-3'>Movie Finder</h1><br/>
        </div>
        );
    }
}