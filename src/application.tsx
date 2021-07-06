import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom'
import routes from './router';

const Application: React.FunctionComponent<{}> = props => {
    return (
    <div>
        <Router>
            <Switch>
                {routes.map((route, idx) => {
                    return <Route 
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        render={(props: RouteComponentProps<any>) => {
                            return <route.component
                                name={route.name}
                                {...props}
                                {...route.props}
                            />
                        }}
                    />
                })}
            </Switch>
        </Router>
    </div>
    );
}

export default Application;