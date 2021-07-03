import '../App.css';
import { Component } from 'react';
import ArticleData from '../Data/articles.json';
import ArticlePicture from '../Data/article_pic.jpg';
class ArticlesList extends Component{
    constructor (props) {
        super(props);
        this.state = {
            showContent: true
        };
        this.toggleContent = this.toggleContent.bind(this);
    }

    toggleContent(event){
        event.preventDefault();
        this.setState({
            showContent: !this.state.showContent
        })
    }
    render(){
        const {showContent} = this.state;
        return (
            <div id="articles">
                {ArticleData.map((articleContent, index)=>{
                    return  <div key={articleContent.id} id="articleContent">
                                <h1 onClick={this.titleClick}>{articleContent.title}</h1> 
                                <img src={ArticlePicture}/>
                                {showContent === true ? <p>{articleContent.content}</p> : ""} 
                                <button onClick={this.toggleContent}>Toggle Content</button>  
                            </div>
                })}
            </div>
        )
    }
}


export default ArticlesList;
