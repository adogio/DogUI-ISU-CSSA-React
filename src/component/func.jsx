import React, { Component } from 'react';
import FuncButton from './funcButton';

class Func extends Component {

    constructor(props) {
        super(props);
        this.mapTabs = this.mapTabs.bind(this);
    }

    render() {
        return (
            <div style={{
                backgroundColor: "#e7e7e7",
                fontSize: "18px",
                height: "50px",
                boxShadowTop: "1px black",
                boxShadowBottom: "1px black"
            }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="col-xs-offset-2 col-xs-8" style={{ height: "100%" }}>
                        {this.props.tabs ? this.props.tabs.map(this.mapTabs) : null}
                    </div>
                </div>
            </div>
        );
    }

    mapTabs(value, index) {
        const test = () => {
            this.props.history.push("/" + value.route);
        }
        if (!Boolean(value.tab)) return null;
        return <FuncButton onClick={test} key={index}>{value.tab}</FuncButton>
    }
}

export default Func;
