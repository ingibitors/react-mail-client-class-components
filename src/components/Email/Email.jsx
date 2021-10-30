import React, {Component} from 'react';
import './Email.css';
import PropTypes from 'prop-types';


class Email extends Component {
    render() {
        //получаем email и выводим topic из объекта
        const {email} = this.props;

        return (
            <li className="email">
                today we have buy {email.topic} with price:
                {email.head} UAH
                {email.title}
            </li>);


    }
}
//PropTypes
//установка: npm i prop-types
//это проаверка типов данных, которые мы хотим получить
    //string,booolean,array,symbol,number,function
//isRequired

//proptypes проще всего писать в виде Email.propTypes = {} передавая объект с конфигурацией
// можем еще static propTypes={}, но єто работает только в классовых компонентах а вариант Email.propTypes = {} работает как в классовом так и функциональном компоненте
//импортируем большой объект PropTypes
     Email.propTypes = {
        /*email: PropTypes.string.isRequired,*/
        /*title: PropTypes.string.isRequired,*/
         email: PropTypes.shape({
             id:PropTypes.number,
                 topic:PropTypes.string
}).isRequired,
    }
//возможные функции:
//instanceOf, oneOf([1,2,3]), oneOfType([]), arrayOf//массив конкретных значений, shape,exact

export default Email;