import React, { Component } from 'react';
import MainLayout from '../components/layouts/mainlayout'

class Contanct extends Component {
    render(){
        return(
            <>
            <MainLayout>
                <h1>Contanct</h1>
                <div style={{ color: 'red'}}>
                    Hello guys
                </div>
                <div className="jsxStyled">
                    styles with styled-jsx
                </div>
                <style jsx>
                    {`
                        .jsxStyled {
                        color:blue
                        }
                    `}
                </style>

                <div className="contact_static">
                    Styles with static css
                </div>
                <div>
                    <img src="static/images/chicagoBulls.png"/>
                </div>
            </MainLayout>
                
            </>
        )
    }
}

export default Contanct;