import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inbox from "./components/Inbox/Inbox";
import axios from "axios";
import Loader from "./components/Loader/Loader";


class App extends Component {
    state = {
        title: 'Mail Client',
        emails: [],
        isLoading: true,//переменная, которая показывает что загрузка с сервера выполнена
    }

    componentDidMount() {
        setTimeout(() =>{
            axios('/emails.json')
                .then(res => {
                    console.log(res)
                    this.setState({emails: res.data,isLoading:false})
                })
        },1500)
            //вариант 2:
        /*fetch('/emails.json')
            .then(res=>res.json())
            .then(res=>)*/
    }
    render() {
        const { emails, isLoading} = this.state

//импортируем (передаем) компоненту  методы и объект user из state и emails

        return (
            <div className="App">
                <Header />
                {/*{emails.length === 0 && <Loader/>}*/}
                {isLoading && <Loader/>}
                {/*компонент inbox не показываем когда идет загрузка(You don`t have any emails не показывается, если мы уберем !isLoading && то он будет постоянно показываться)*/}
                {/*{!isLoading && <Inbox emails={emails}/>}*/}
                {<Inbox emails={emails}/>}
                <Footer/>

                {/* <Test IncrementAge={this.IncrementAge} updateTitle={this.updateTitle} user={user} emails={emails}/>*/}
            </div>
        );
    }
}


export default App;
