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
                <Func tabs={this.props.tabs} history={this.props.routes.history} anti={this.props.anti} />
                <div style={Object.assign({ minHeight: "100%", transition: "1s background-color ease" },
                    this.props.anti ?
                        { backgroundColor: "#333333", color: "#ffffff" } :
                        { backgroundColor: "#fcfcfc", color: "#010101" })}>
                    {this.props.children}
                </div>
                <Footer source={this.props.source} contact={this.props.contact} anti={this.props.anti} />
            </div>
        );
    }
}

export default Structure;
