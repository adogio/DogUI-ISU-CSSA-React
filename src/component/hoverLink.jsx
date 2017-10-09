import React, { Component } from 'react';

class HoverLink extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.hrefTo = this.hrefTo.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <div
                onClick={this.hrefTo}
                className="row"
                style={{ fontSize: "30px", paddingBottom: "10px", cursor: "pointer" }}
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}>
                <div className="col-xs-5"
                    style={Object.assign(
                        { textAlign: "right" },
                        this.state.hover ? { color: this.props.color } : {})}>
                    <i className={"fa fa-fw fa-" + this.props.icon} aria-hidden="true" />
                </div>
                <div className="col-xs-7"
                    style={Object.assign(
                        { textAlign: "left" },
                        this.state.hover ? { textDecoration: "underline" } : { textDecoration: "none" })}>
                    <span style={{ fontSize: "14px" }}>{this.props.children}</span>
                </div>
            </div>
        );
    }

    hrefTo() {
        if (this.props.href) {
            window.open(this.props.href);
        }
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    releaseHover() {
        this.setState({
            hover: false
        })
    }
}

export default HoverLink;
