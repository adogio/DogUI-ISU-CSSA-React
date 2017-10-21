import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Structure from './component/structure';
import RouteManager from './component/routeManager';
import "./index.css";

class DogUIISUCSSA extends Component {
    keyQueue;

    constructor(props) {
        super(props);
        this.pressKey = this.pressKey.bind(this);
        this.keyQueue = 0;
        this.state = {
            anti: false
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.pressKey)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.pressKey)
    }

    render() {
        return (
            <div>
                {this.props.history || this.props.routes ? <Route
                    path="/"
                    component={
                        (routes) =>
                            <Structure
                                tabs={this.props.tabs}
                                navs={this.props.navs}
                                routes={routes}
                                anti={this.state.anti}
                                source={this.props.source}
                                info={this.props.info}
                                pre={this.props.pre}
                                subTitle={this.props.children}>
                                <div className="row">
                                    <div className="col-md-offset-2 col-md-8">
                                        <RouteManager tabs={this.props.tabs} pre={this.props.pre} />
                                    </div>
                                </div>
                            </Structure>
                    }
                /> :
                    <BrowserRouter>
                        <Route
                            path="/"
                            component={
                                (routes) =>
                                    <Structure
                                        tabs={this.props.tabs}
                                        navs={this.props.navs}
                                        routes={routes}
                                        anti={this.state.anti}
                                        source={this.props.source}
                                        info={this.props.info}
                                        pre={this.props.pre}
                                        subTitle={this.props.children}>
                                        <div className="row">
                                            <div className="col-sm-offset-2 col-sm-8">
                                                <RouteManager tabs={this.props.tabs} pre={this.props.pre} />
                                            </div>
                                        </div>
                                    </Structure>
                            }
                        />
                    </BrowserRouter>}
            </div>
        );
    }

    pressKey(event) {
        const Kpp = (desire) => {
            const thisKey = event.key;
            if (thisKey === desire) {
                this.keyQueue++;
                if (this.keyQueue === 10) {
                    this.keyQueue = 0;
                    this.setState({
                        anti: this.state.anti ? false : true
                    });
                }
            } else {
                this.keyQueue = 0;
            }
        }
        switch (this.keyQueue) {
            case 0:
            case 1:
                Kpp("ArrowUp");
                break;
            case 2:
            case 3:
                Kpp("ArrowDown");
                break;
            case 4:
                Kpp("ArrowLeft");
                break;
            case 5:
                Kpp("ArrowRight");
                break;
            case 6:
                Kpp("ArrowLeft");
                break;
            case 7:
                Kpp("ArrowRight");
                break;
            case 8:
                Kpp("b");
                break;
            case 9:
                Kpp("a");
                break;
            default:
                return null;
        }
    }
}

export default DogUIISUCSSA;
