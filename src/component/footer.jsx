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
                        <p style={{ fontSize: "14px", margin: "0" }}>
                            <a href="mailto:cssa.isu.ia@gmail.com"
                                style={{ color: "#686868" }}>
                                cssa.isu.ia@gmail.com
                                </a></p>
                        <p style={{ fontSize: "14px", margin: "0" }}>2229 Lincoln Way C4 1530 Student Office</p>
                        <p style={{ fontSize: "14px", margin: "0" }}>​Memorial Union Ames, iA 50011-1130</p>
                    </div>
                    <div className="col-md-3">
                        <HoverLink icon="wechat" color="#06ad00" href="http://www.isucssa.org/24494204493902938754.html">Wechat</HoverLink>
                        <HoverLink icon="weibo" color="#da0000" href="http://weibo.com/isucssa">Weibo</HoverLink>
                        <HoverLink icon="facebook-square" color="#008ada" href="https://www.facebook.com/iaisucssa">Facebook</HoverLink>
                        <HoverLink icon="instagram" color="#a115ff" href="https://www.instagram.com/isucssa/">Instragram</HoverLink>
                    </div>
                    <div className="col-md-3">
                        <strong>DogUI</strong> Copyright © 2017 WMXPY, open sourced under a
                        &nbsp;<a rel="license" style={{ color: "#686868" }} href="http://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a>&nbsp;
                        License.
                        <br />
                        <a style={{ color: "#686868" }} href="https://github.com/adogio/DogUI-ISU-CSSA-React"><i className="fa fa-git-square fa-fw" aria-hidden="true" />DogUI</a>
                        <br />
                        {this.props.source ?
                            <a style={{ color: "#686868" }} href={this.props.source.link}>
                                <i className="fa fa-git-code fa-fw" aria-hidden="true" />
                                this.props.source.name</a> :
                            null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
