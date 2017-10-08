import React, { Component } from 'react';

class HoverButton extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.state = {
            hover: false
        }
    }

    render() {
        return (
            <button
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}
                style={Object.assign({
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    cursor: "pointer",
                    border: "0px",
                    height: "100%",
                    textDecoration: "none"
                }, this.state.hover ? { color: "white", backgroundColor: "#7c7c7c" } : { color: "#ccc", backgroundColor: "transparent" })}
                onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
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

export default HoverButton;
