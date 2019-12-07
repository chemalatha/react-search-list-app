import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            title:'My React App',
            keywords:''
        }
    }
    inputChanges(event){
        this.setState({keywords:event.target.value});
        this.props.newsSearch(event.target.value);
    }
    render(){
        return(
            <header>
                <div className='logo'
                    onClick={()=>console.log('clicked')}>
                    {this.state.title}
                </div>
                <center>
                    <input type="text"
                    onChange={this.inputChanges.bind(this)} />
                    <p>{this.state.keywords}</p>
                </center>
            </header>
            
        )
    }
}

export default Header;