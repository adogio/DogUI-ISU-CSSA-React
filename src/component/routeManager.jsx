import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

class RouteManager extends Component {

    constructor(props) {
        super(props);
        this.mapRoutes = this.mapRoutes.bind(this);
    }

    render() {
        return (
            <Switch>
                {this.props.tabs ? this.props.tabs.map(this.mapRoutes) : null}
            </Switch>
        );
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
