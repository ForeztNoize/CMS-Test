import '../App.css';
import { Component } from 'react';
import ArticleData from '../Data/articles.json';
import ArticlePicture from '../Data/article_pic_2.jpg';
class ArticlesList extends Component{
    constructor (props) {
        super(props);
       this.state = {
            showContent: false
        };
        this.toggleContent = this.toggleContent.bind(this);
    }

    //Toggles the text of all articles
    toggleContent(event){
        event.preventDefault();
        this.setState({
            showContent: !this.state.showContent
        })
    }
   
    //Renders out the articles and their content from the JSON file
    render(){
        const {showContent} = this.state;
        return (
            <div id="articles">
                {ArticleData.map((articleContent, index)=>{
                    return  <div key={articleContent.id} onClick={this.toggleContent} id="articleContent">
                                <h1 onClick={this.titleClick}>{articleContent.title}</h1> 
                                <img src={ArticlePicture}/>
                                {showContent === true ? <p>{articleContent.content}</p> : ""} 
                            </div>
                })}
            </div> 

        )
    }
}


export default ArticlesList;
