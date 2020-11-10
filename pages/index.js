import React,{ Component } from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainlayout'
// import '../styles/main.css';
import Style from '../styles/main.css';
// use css as module 


class Home extends Component {
    static async getInitialProps({pathname, query, asPath, req, res }){
        let userData;
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            userData = response.data;
            // console.log(userData)

        } catch{
            console.log('error')
        }

        // console.log(pathname);
        // console.log(query);
        // console.log(req);

        // console.log('Initial Props');
        return {
            user:{
                name: 'Francis',
                lastname: 'jones'
            },
            userData
        }

    }

    constructor(props){
        super(props)

        this.state= {
            user:this.props.user,
            userData: this.props.userData
        }
        // console.log(this.props.user);
    }

    render(){
        // console.log(this.state);
        return(
            <>
                <MainLayout>
                    <h1 className={Style.superAwesome}>Welcome to my page</h1>
                </MainLayout>
            </>
        )
    }
}

export default Home;