import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "30px",
                backgroundColor: "#333",
                color: "#ccc",
                fontSize: "10px"
            }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-md-offset-2 col-md-8" style={{ height: "100%" }}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
