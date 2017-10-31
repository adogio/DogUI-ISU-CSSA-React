import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import './flex.css';

class Title extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                backgroundColor: "#cc0000",
                color: "#ffffff",
                minHeight: "150px",
                height: "auto",
                paddingTop: "15px",
                paddingBottom: "15px",
                fontFamily: "'Libre Baskerville', serif"
            }}>
                <div className="row">
                    <div className="col-sm-2" style={{ textAlign: "right" }}>
                        <div style={{ paddingRight: "10px" }}>
                            <Logo width="70" />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div style={{
                            float: "left",
                            whiteSpace: "nowrap",
                            paddingTop: this.props.info.department ? "0px" : "10px",
                            userSelect: "none"
                        }}>
                            <p className={this.props.info.sub ? "dcy-large" : "dcy-xl"} style={{ margin: "0", cursor: "pointer" }}>
                                I<span className={this.props.info.sub ? "dcy-small" : "dcy-medium"}>OWA </span>
                                S<span className={this.props.info.sub ? "dcy-small" : "dcy-medium"}>TATE </span>
                                U<span className={this.props.info.sub ? "dcy-small" : "dcy-medium"}>NIVERSITY</span></p>
                            {this.props.info.sub ?
                                <p className="dcy-xs" style={{ margin: "0", marginTop: "-1vw", cursor: "pointer" }}>
                                    {this.props.info.sub}
                                </p> : null}
                            {this.props.info.department ?
                                <p className="dcy-xs" style={{ margin: "0", cursor: "pointer" }}>
                                    <strong>{this.props.info.department.toUpperCase()}</strong>
                                </p>
                                : null}
                        </div>
                        <div className="dcy-searchBar" style={{ width: "35%", maxWidth: "400px", position: "absolute", right: "0px", textAlign: "right" }}>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;
