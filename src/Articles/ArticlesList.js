import '../App.css';
import { Component } from 'react';
import ArticleData from '../Data/articles.json';
import ArticlePicture from '../Data/article_pic.jpg';
class ArticlesList extends Component{
    render(){
        return (
            <div id="articles">
                {ArticleData.map((articleContent, index)=>{
                    return  <div id="articleContent">
                                <h1>{articleContent.title}</h1> 
                                <img src={ArticlePicture}/>
                                <p>{articleContent.content}</p>    
                            </div>
                })}
            </div>
        )
    }
}


export default ArticlesList;
