import React, { Component } from 'react';
import propTypes from 'prop-types';
import FuncButton from './funcButton';

class Func extends Component {

    constructor(props) {
        super(props);
        this.mapTabs = this.mapTabs.bind(this);
        this.tabConfigeriter = this.tabConfigeriter.bind(this);
    }

    render() {
        const barHeight = !Boolean(this.props.tabs) ? "50px" : Boolean(this.props.tabs.map) ? "50px" : "10px";
        return (
            <div style={{
                backgroundColor: this.props.anti ? "#222222" : "#e7e7e7",
                color: this.props.anti ? "#cccccc" : "#444444",
                fontSize: "18px",
                minHeight: barHeight,
                height: "auto",
                boxShadowTop: "1px black",
                boxShadowBottom: "1px black",
                userSelect: "none"
            }}>
                <div className="row" style={{ height: "100%", minHeight: barHeight }}>
                    <div className="col-sm-offset-2 col-sm-8" style={{ height: "100%", minHeight: barHeight }}>
                        {this.tabConfigeriter()}
                    </div>
                </div>
            </div>
        );
    }

    tabConfigeriter() {
        if (!Boolean(this.props.tabs)) return null;
        if (this.props.tabs.map) {
            return this.props.tabs.map(this.mapTabs);
        } else {
            return null;
        }
    }

    mapTabs(value, index) {
        const test = () => {
            this.props.history.push("/" + this.props.pre + "/" + value.route);
        }
        if (!Boolean(value.tab)) return null;
        return <FuncButton onClick={test} key={index} anti={this.props.anti}>{value.tab}</FuncButton>
    }
}

Func.propTypes = {
    tabs: propTypes.oneOfType([propTypes.arrayOf(propTypes.object), propTypes.object])
}

export default Func;
