import React from 'react';

const Header = () => (
    <div className="header">
        <img className="logo" src="./images/hp-logo.jpg" width="450px" onClick={() => window.location.reload(false)}></img>
        <h3 className="fadeIn">How well do you remember the first book?</h3>
    </div>
);

export default Header;