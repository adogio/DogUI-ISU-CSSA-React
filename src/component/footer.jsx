import React, { Component } from 'react';
import HoverLink from './hoverLink';

class Footer extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#f3f3f3",
                color: "#686868",
                fontSize: "14px",
                lineHeight: "24px",
                padding: "9%",
                paddingTop: "25px",
                paddingBottom: "45px",
                bottom: "0px",
                clear: "both"
            }}>
                <div className="row" style={{ overflow: "visible" }}>
                    <div className="col-md-3" style={{ textAlign: "center", overflow: "visible" }}>
                        <p style={{
                            fontSize: "30px",
                            margin: "0",
                            color: "#c00",
                            fontFamily: "'Libre Baskerville', serif",
                            whiteSpace: "nowrap",
                            cursor: "pointer"
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
                            cursor: "pointer"
                        }}>UNIVERSITY</p>
                        <p style={{ fontSize: "18px", margin: "0", paddingTop: "10px" }}>Chinese Students &</p>
                        <p style={{ fontSize: "18px", margin: "0" }}> Scholars Association</p>
                    </div>
                    <div className="col-md-3">
                        <p style={{ fontSize: "14px", margin: "0" }}><strong>Iowa State Universisy</strong></p>
                        <p style={{ fontSize: "14px", margin: "0" }}>Chinese Students & Scholars Association</p>
                        <br />
                        {this.props.contact.email ? <p style={{ fontSize: "14px", margin: "0" }}>
                            <a href={"mailto:" + this.props.contact.email}
                                style={{ color: "#686868" }}>
                                {this.props.contact.email}
                            </a>
                        </p> : null}
                        {this.props.contact.phone ? <p style={{ fontSize: "14px", margin: "0" }}>
                            <a href={"tel:" + this.props.contact.phone}
                                style={{ color: "#686868" }}>
                                {this.props.contact.phone}
                            </a>
                        </p> : null}
                        <p style={{ fontSize: "14px", margin: "0" }}>{this.props.contact.address}</p>
                        <p style={{ fontSize: "14px", margin: "0" }}>{this.props.contact.address2}</p>
                    </div>
                    <div className="col-md-3">
                        {this.props.contact.wechat ?
                            <HoverLink icon="wechat" color="#06ad00" href={this.props.contact.wechat}>Wechat</HoverLink>
                            : null}
                        {this.props.contact.weibo ?
                            <HoverLink icon="weibo" color="#da0000" href={this.props.contact.weibo}>Weibo</HoverLink>
                            : null}
                        {this.props.contact.facebook ?
                            <HoverLink icon="facebook-square" color="#008ada" href={this.props.contact.facebook}>Facebook</HoverLink>
                            : null}
                        {this.props.contact.instagram ?
                            <HoverLink icon="instagram" color="#a115ff" href={this.props.contact.instagram}>Instragram</HoverLink>
                            : null}
                    </div>
                    <div className="col-md-3">
                        Copyright © 2017 WMXPY, open sourced under a
                        &nbsp;<a rel="license" style={{ color: "#686868" }} href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>&nbsp;
                        License.
                        <br />
                        <a style={{ color: "#686868" }} href="https://github.com/adogio/DogUI-ISU-CSSA-React"><i className="fa fa-git-square fa-fw" aria-hidden="true" />DogUI</a>
                        <br />
                        {this.props.source ?
                            <a style={{ color: "#686868" }} href={this.props.source.link}>
                                <i className="fa fa-code fa-fw" aria-hidden="true" />
                                {this.props.source.name}</a> :
                            null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
