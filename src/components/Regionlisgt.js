import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Gj, Sy, Hu } from './pages';

class Regionlist extends Component {
    render() {
        return (
            <Router>
                <ListGroup>
                    <ListGroupItem disabled tag="a">우리 지역 둘러보기</ListGroupItem>
                    <ListGroupItem tag="a"> <Link to="/Gj">금정구</Link> </ListGroupItem>
                    <ListGroupItem tag="a"> <Link to="/Sy">수영구</Link> </ListGroupItem>
                    <ListGroupItem tag="a"> <Link to="/Hu">해운대구</Link> </ListGroupItem>
                </ListGroup>
                <Switch>
                    <Route path='/Gj' component={Gj} />
                    <Route path='/Sy' component={Sy} />
                    <Route path='/Hu' component={Hu} />
                </Switch>
            </Router>
        );
    }
}

export default Regionlist;