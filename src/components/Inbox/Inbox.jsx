import React, {Component} from 'react';
import Email from "../Email/Email";

class Inbox extends Component {
    render() {
        //props принимаем методы и обьекты, которые мы передали в app.js
        const {emails} = this.props;
        //каждый элемент массива превращаем в компонент Email с уникальным ключем (id) для каждого объекта
        //когда мы работаем с массивами нужно всегда ставить ключ,который должен быть уникальным
         const emailCards=emails.map(e => <Email key={e.id} email={e} />);
        return (
            <div>
                <div>
                    {/*если эмейлов нет то появляется надпись "You don`t have any emails"*/}
                    {emails.length===0 && <div>You don`t have any emails</div>}
                    <ul>
                        {emailCards}
                    </ul>
                </div>
                <div><div>Your cart is empty </div></div>
            </div>
        );
    }
}

export default Inbox;