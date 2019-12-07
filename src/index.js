import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import NewsList from './component/NewsList';
import JSON from './db.json';

class App extends Component {
    constructor(){
        super();
        this.state = {
            news: JSON,
            filtered:JSON
        }
    }
    filterNews(userInput){
        let output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase()) >-1)
        });
        this.setState({filtered:output});
    }
    render(){
        console.log(this.state.news);
        return (
            <React.Fragment>
                <Header newsSearch={(data) => {this.filterNews(data)}}/>
                <hr />
                <NewsList newsData={this.state.filtered}></NewsList>
            </React.Fragment>
        );
    }

}

ReactDOM.render(<App />,document.getElementById('root'));
