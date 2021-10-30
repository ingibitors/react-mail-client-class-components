import React, {Component} from 'react';
import deathStar from "./death-star-svgrepo-com.svg";
import  "./Error500.css"

class Error500 extends Component {
    render() {
        return (
            <div className='error-500'>
               <h2>Whoops... We have an error</h2>
                <h4>But we already sent droids to fix it</h4>
                <div><img src={deathStar} alt="this is"/></div>
            </div>
        );
    }
}

export default Error500;