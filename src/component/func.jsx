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
                backgroundColor: this.props.anti ? "#222222" : "#e7e7e7",
                color: this.props.anti ? "#cccccc" : "#444444",
                fontSize: "18px",
                minHeight: "50px",
                height: "auto",
                boxShadowTop: "1px black",
                boxShadowBottom: "1px black",
                userSelect: "none"
            }}>
                <div className="row" style={{ height: "100%", minHeight: "50px" }}>
                    <div className="col-sm-offset-2 col-sm-8" style={{ height: "100%", minHeight: "50px" }}>
                        {this.props.tabs ? this.props.tabs.map(this.mapTabs) : null}
                    </div>
                </div>
            </div>
        );
    }

    mapTabs(value, index) {
        const test = () => {
            this.props.history.push("/" + this.props.pre + "/" + value.route);
        }
        if (!Boolean(value.tab)) return null;
        return <FuncButton onClick={test} key={index} anti={this.props.anti}>{value.tab}</FuncButton>
    }
}

export default Func;
