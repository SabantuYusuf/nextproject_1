import React,{ Component } from 'react';
import axios from 'axios';
import MainLayout from '../components/layouts/mainlayout'


class Home extends Component {
    static async getInitialProps(){
        let userData;
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            userData = response.data;
            console.log(userData)

        } catch{
            console.log('error')
        }

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
        console.log(this.state);
        return(
            <>
                <MainLayout>
                    <h1>Welcome to my page</h1>
                </MainLayout>
            </>
        )
    }
}

export default Home;