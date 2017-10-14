import React, { Component } from 'react';
import Nav from './nav';
import Title from './title';
import Func from './func';
import HoverButton from './hoverButton';
import Footer from './footer';


class Structure extends Component {

    constructor(props) {
        super(props);
        this.renderNavs = this.renderNavs.bind(this);
    }

    render() {
        return (
            <div>
                <Nav>
                    {this.props.navs.map(this.renderNavs)}
                </Nav>
                <Title info={this.props.info}>{this.props.subTitle}</Title>
                <Func tabs={this.props.tabs} history={this.props.routes.history} anti={this.props.anti} pre={this.props.pre} />
                <div style={Object.assign({ minHeight: "100%", transition: "1s background-color ease" },
                    this.props.anti ?
                        { backgroundColor: "#333333", color: "#ffffff" } :
                        { backgroundColor: "#fcfcfc", color: "#010101" })}>
                    {this.props.children}
                </div>
                <Footer source={this.props.source} info={this.props.info} anti={this.props.anti} />
            </div>
        );
    }

    renderNavs(value, index) {
        let fun;
        switch (value.type) {
            case "func":
            case "fun":
            case "function":
                fun = value.click;
                break;
            case "route":
            case "routes":
            case "router":
                fun = () => { this.props.routes.history.push(value.click) };
                break;
            default:
                fun = () => { };
        }
        return <HoverButton onClick={fun} key={index}>{value.nav}</HoverButton>
    }
}

export default Structure;
