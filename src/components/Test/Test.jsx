import React, {Component} from 'react';
import Email from "../Email/Email";


class Test extends Component {

    render() {

        const {IncrementAge,updateTitle,user,emails} = this.props;
      const emailCards=emails.map(e => <Email key={e.id} email={e} />);

        return (
            <div>
                <li>
                    {emailCards}
                </li>
            </div>
        );
    }
}

export default Test;