import React,{Component} from 'react';


class Header extends Component{

    render(){
        const mystyles={
            header:{
                backgroundColor:'teal'
            },
            logo:{
                color:'white',
                textAlign:'center',
                fontSize:'30px'
            }
        }
        return(
            <header style={mystyles.header}>

                    <div style={mystyles.logo}>React App</div>
                    <center>
                        <input type="text" />
                    </center>
                
            </header>
            
        )
    }
}

export default Header;