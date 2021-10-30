import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'


class Loader extends Component {
    componentDidMount() {
        console.log("didmount")
    }
    componentWillUnmount() {
        console.log("willunmount")
    }

    render() {
        return (
            <div className="loader">
                <Spinner animation="grow" />
            </div>
        );
    }
}

export default Loader;