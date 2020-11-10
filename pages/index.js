import React,{ Component } from 'react';
import MainLayout from '../components/layouts/mainlayout'


class Home extends Component {
    render(){
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