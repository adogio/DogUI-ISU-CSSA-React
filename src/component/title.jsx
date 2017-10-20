import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';

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
                fontSize: "40px",
                fontFamily: "'Libre Baskerville', serif"
            }}>
                <div className="row">
                    <div className="col-sm-2" style={{ textAlign: "right" }}>
                        <div style={{ paddingRight: "30px" }}>
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
                            <p style={{ fontSize: this.props.info.sub ? "40px" : "44px", margin: "0", cursor: "pointer" }}>
                                I<span style={{ fontSize: this.props.info.sub ? "32px" : "36px" }}>OWA </span>
                                S<span style={{ fontSize: this.props.info.sub ? "32px" : "36px" }}>TATE </span>
                                U<span style={{ fontSize: this.props.info.sub ? "32px" : "36px" }}>NIVERSITY</span></p>
                            {this.props.info.sub ?
                                <p style={{ fontSize: "21px", margin: "0", marginTop: "-10px", cursor: "pointer" }}>
                                    {this.props.info.sub}
                                </p> : null}
                            {this.props.info.department ?
                                <p style={{ fontSize: "24px", margin: "0", paddingTop: "10px", cursor: "pointer" }}>
                                    <strong>{this.props.info.department.toUpperCase()}</strong>
                                </p>
                                : null}
                        </div>
                        <div style={{ width: "35%", maxWidth: "400px", position: "absolute", right: "0px", textAlign: "right" }}>
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;
