import React, {Component} from 'react';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {


render() {
    const {title}=this.props;
    return (
            <div>
                <h3>Header</h3>
                <h2>{title} </h2>
            </div>
        )
}
}

Header.propTypes = {
    title: PropTypes.string
}
//если мы не передаем в App то будет дефолтное значение:
Header.defaultProps={
    title:"Default Title"
}
export default Header;