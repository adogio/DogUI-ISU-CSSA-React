import React, { Component } from 'react';
import Nav from './nav';
import Title from './title';
import Func from './func';
import HoverButton from './hoverButton';
import Footer from './footer';


class Structure extends Component {

    render() {
        return (
            <div>
                <Nav>
                    <HoverButton>isucssa.org</HoverButton>
                    <HoverButton>Index</HoverButton>
                    <HoverButton>Directory</HoverButton>
                </Nav>
                <Title>{this.props.subTitle}</Title>
                <Func tabs={this.props.tabs} history={this.props.routes.history} />
                <div style={{ minHeight: "100%" }}>
                    {this.props.children}
                </div>
                <Footer source={this.props.source} contact={this.props.contact} />
            </div>
        );
    }
}

export default Structure;
