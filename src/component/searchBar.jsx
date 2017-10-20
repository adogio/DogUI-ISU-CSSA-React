import React, { Component } from 'react';

class SearchBar extends Component {
    isFocus;

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.releaseHover = this.releaseHover.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.isFocus = false;
        this.state = {
            hover: false,
            value: ""
        }
    }

    render() {
        return (
            <div
                style={{ overflow: "hidden" }}
                onMouseOver={this.handleHover}
                onMouseLeave={this.releaseHover}>
                <input
                    value={this.state.value}
                    onInput={this.handleInput}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    style={Object.assign(
                        {
                            paddingLeft: "12px",
                            transition: "0.3s all",
                            border: "0px",
                            borderRadius: "5px",
                            height: "32px",
                            fontSize: "15px"
                        },
                        this.state.hover ?
                            { width: "100%", color: "black" } :
                            { width: "70%", background: "#8b0000", color: "white" }
                    )}>
                </input>
                <span style={Object.assign(
                    {
                        paddingLeft: "5px",
                        transition: "0.3s all",
                        position: "absolute",
                        bottom: "8px",
                        fontSize: "15px",
                        userSelect: "none"
                    },
                    this.state.hover ?
                        { left: "0px", display: "none" } :
                        { left: "30%" },
                    this.state.value ?
                        { display: "none" } :
                        {}
                )}>Search</span>
                <span style={Object.assign(
                    {
                        transition: "0.3s all",
                        position: "absolute",
                        right: "15px",
                        bottom: "8px",
                        fontSize: "15px"
                    },
                    this.state.hover ?
                        { display: "none" } :
                        {},
                )}><i className="fa fa-search" aria-hidden="true" /></span>
            </div>
        );
    }

    handleFocus() {
        this.isFocus = true;
    }

    handleBlur() {
        this.isFocus = false;
        if (this.state.value === "") {
            this.setState({
                hover: false
            })
        }
    }

    handleInput(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleHover() {
        this.setState({
            hover: true
        })
    }

    releaseHover() {
        if (this.state.value === "" && this.isFocus === false) {
            this.setState({
                hover: false
            })
        }
    }
}

export default SearchBar;
