import React, {Component} from 'react';
import Error500 from "../Error500/Error500";

class ErrorBoundary extends Component {
    state={
        //переключатель который говорит есть у нас ошибка или нет
        hasError: false
    }
    //если метод сработал, значит в приложении где-то возникла ошибка
    componentDidCatch(error, errorInfo) {
this.setState({hasError: true});
// этот метод больше нужно использовать если нужно будет информацию об ошибке
// отправить на сервер axios.post('/error',{error,errorInfo})
    }
    //ниже метод более предпочтительный, его рекомендуют использовать
/*static getDeliveredStateFromError(error){
return {hasError:true}

}*/
/*специальный props children, который находится между открывающим и закрывающим тегом*/
    render() {
        const {children} = this.props;
        const {hasError}=this.state;
       /* если у нас возникла ошибка то выводим компонент <Error500/> иначе
        выводим родительский компонент (children)=App.jsx*/

        if(hasError){
            return <Error500/>
        }

        return children;

    }
}

export default ErrorBoundary;