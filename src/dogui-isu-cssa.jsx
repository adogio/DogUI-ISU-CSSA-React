import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Structure from './component/structure';
import RouteManager from './component/routeManager';
import "./index.css";

class DogUIISUCSSA extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route
                        path="/"
                        component={
                            (routes) =>
                                <Structure tabs={this.props.tabs} routes={routes} subTitle={this.props.children}>
                                    <div className="row">
                                        <div className="col-md-offset-2 col-md-8">
                                            <RouteManager tabs={this.props.tabs} />
                                        </div>
                                    </div>
                                </Structure>
                        }
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default DogUIISUCSSA;
