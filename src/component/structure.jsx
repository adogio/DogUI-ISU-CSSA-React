import React, { Component } from 'react';
import Nav from './nav';
import Title from './title';
import Func from './func';

class Structure extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <a style={{ paddingRight: "17px", cursor: "pointer", color: "#ccc", textDecoration: "none" }}>isucssa.org</a>
                    <a style={{ paddingRight: "17px", cursor: "pointer", color: "#ccc", textDecoration: "none" }}>Index</a>
                    <a style={{ paddingRight: "17px", cursor: "pointer", color: "#ccc", textDecoration: "none" }}>Directory</a>
                </Nav>
                <Title>{this.props.children}</Title>
                <Func tabs={this.props.tabs} history={this.props.routes.history} />
            </div>
        );
    }
}

export default Structure;
