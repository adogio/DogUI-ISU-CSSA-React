import React, { Component } from 'react';
import HoverLink from './hoverLink';
import Dogo from 'dogo';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.linkToISU = this.linkToISU.bind(this);
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.props.anti ? "#000000" : "#f3f3f3",
                color: this.props.anti ? "#dddddd" : "#686868",
                fontSize: "14px",
                lineHeight: "24px",
                padding: "9%",
                paddingTop: "25px",
                paddingBottom: "45px",
                bottom: "0px",
                clear: "both",
            }}>
                <div className="row" style={{ overflow: "visible" }}>
                    <div className="col-md-3" style={{ textAlign: "center", overflow: "visible" }} onClick={this.linkToISU}>
                        <p style={{
                            fontSize: "30px",
                            margin: "0",
                            color: "#c00",
                            fontFamily: "'Libre Baskerville', serif",
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                            userSelect: "none"
                        }}>
                            I<span style={{ fontSize: "24px" }}>OWA </span>
                            S<span style={{ fontSize: "24px" }}>TATE</span>
                        </p>
                        <p style={{
                            fontSize: "25px",
                            paddingTop: "1px",
                            margin: "0",
                            color: "#c00",
                            fontFamily: "'Libre Baskerville', serif",
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                            userSelect: "none"
                        }}>UNIVERSITY</p>
                        {this.props.info.sub ?
                            <p style={{ fontSize: "14px", margin: "0", paddingTop: "10px" }}>{this.props.info.sub}</p>
                            : null}
                    </div>
                    <div className="col-md-3">
                        <p style={{ fontSize: "14px", margin: "0" }}><strong>Iowa State Universisy</strong></p>
                        {this.props.info.sub ?
                            <p style={{ fontSize: "14px", margin: "0" }}>{this.props.info.sub}</p>
                            : null}
                        <br />
                        {this.props.info.email ? <p style={{ fontSize: "14px", margin: "0" }}>
                            <a href={"mailto:" + this.props.info.email}
                                style={{ color: this.props.anti ? "#ffffff" : "#686868" }}>
                                {this.props.info.email}
                            </a>
                        </p> : null}
                        {this.props.info.phone ? <p style={{ fontSize: "14px", margin: "0" }}>
                            <a href={"tel:" + this.props.info.phone}
                                style={{ color: this.props.anti ? "#ffffff" : "#686868" }}>
                                {this.props.info.phone}
                            </a>
                        </p> : null}
                        <p style={{ fontSize: "14px", margin: "0" }}>{this.props.info.address}</p>
                        <p style={{ fontSize: "14px", margin: "0" }}>{this.props.info.address2}</p>
                    </div>
                    <div className="col-md-3" style={{ userSelect: "none" }}>
                        {this.props.info.wechat ?
                            <HoverLink icon="wechat" color="#06ad00" href={this.props.info.wechat}>Wechat</HoverLink>
                            : null}
                        {this.props.info.weibo ?
                            <HoverLink icon="weibo" color="#da0000" href={this.props.info.weibo}>Weibo</HoverLink>
                            : null}
                        {this.props.info.facebook ?
                            <HoverLink icon="facebook-square" color="#008ada" href={this.props.info.facebook}>Facebook</HoverLink>
                            : null}
                        {this.props.info.instagram ?
                            <HoverLink icon="instagram" color="#a115ff" href={this.props.info.instagram}>Instragram</HoverLink>
                            : null}
                        {this.props.info.twitter ?
                            <HoverLink icon="twitter" color="#00c5f7" href={this.props.info.twitter}>Twitter</HoverLink>
                            : null}
                        {this.props.info.snapchat ?
                            <HoverLink icon="snapchat-square" color="#e5ff00" href={this.props.info.snapchat}>Snapchat</HoverLink>
                            : null}
                        {this.props.info.pinterest ?
                            <HoverLink icon="pinterest" color="#e20f00" href={this.props.info.pinterest}>Pinterest</HoverLink>
                            : null}
                    </div>
                    <div className="col-md-3">
                        Copyright © 2017 WMXPY, open sourced under a
                        &nbsp;<a rel="license" style={{ color: this.props.anti ? "#ffffff" : "#686868", cursor: "pointer" }} href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>&nbsp;
                        License.
                        <br />
                        {this.props.source ?
                            <a style={{
                                color: this.props.anti ? "#ffffff" : "#686868",
                                cursor: "pointer",
                                userSelect: "none",
                            }} onClick={() => { window.open(this.props.source.link) }}>
                                <i className="fa fa-code fa-fw" aria-hidden="true" />
                                <span style={{ paddingLeft: "4px", paddingRight: "4px" }}>{this.props.source.name}</span></a> :
                            null}
                        <Dogo width="18" height="18" force onClick={() => { window.open("http://adog.io") }}></Dogo>
                    </div>
                </div>
            </div>
        );
    }

    linkToISU() {
        window.open("https://www.iastate.edu");
    }
}

export default Footer;
