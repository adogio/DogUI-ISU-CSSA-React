import React, { Component } from 'react';

class FuncButton extends Component {

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
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    cursor: "pointer",
                    border: "0px",
                    height: "100%",
                    textDecoration: "none"
                }, this.state.hover ? { backgroundColor: this.props.anti ? "#555555" : "#cccccc" } : { backgroundColor: "transparent" })}
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

export default FuncButton;
