import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer bg-primary">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <span>&copy; {new Date().getFullYear()} Copyright Saidamirxon </span>
                            <p className="mb-0">MOVIES APP</p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;