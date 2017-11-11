import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

class RouteManager extends Component {

    constructor(props) {
        super(props);
        this.mapRoutes = this.mapRoutes.bind(this);
        this.tabConfigeriter = this.tabConfigeriter.bind(this);
    }

    render() {
        return (
            <Switch>
                {this.tabConfigeriter()}
            </Switch>
        );
    }

    tabConfigeriter() {
        if (!Boolean(this.props.tabs)) return null;
        if (this.props.tabs.map) {
            return this.props.tabs.map(this.mapRoutes);
        } else {
            return this.mapRoutes(this.props.tabs, null);
        }
    }


    mapRoutes(value, index) {
        if (value.redirect) {
            return <Route
                path={"/" + this.props.pre + "/" + value.route}
                exact={value.route.length <= 1}
                key={index}
                render={() =>
                    (<Redirect to={"/" + this.props.pre + "/" + value.redirect} />)
                }
            />
        }
        const Component = value.component;
        return <Route
            path={"/" + this.props.pre + "/" + value.route}
            exact={value.route.length <= 1}
            render={() => {
                return value.full ?
                    <Component /> :
                    <div className="row">
                        <div className="col-sm-offset-2 col-sm-8 dcy-main">
                            <Component />
                        </div>
                    </div>
            }}
            key={index}
        />
    }
}

export default RouteManager;
