import React, {Component} from 'react';
import {BounceLoader} from "react-spinners";

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <BounceLoader color="#7dba29" size="100"/>
            </div>
        );
    }
}

export default Loader;