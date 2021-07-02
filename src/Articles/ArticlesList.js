import '../App.css';
import { Component } from 'react';
import ArticleData from '../Data/articles.json';
class ArticlesList extends Component{
    render(){
        return (
            <div id="articles">
                <h1>Here comes data</h1>
                {ArticleData.map((articleContent, index)=>{
                    return  <div>
                                <h1>{articleContent.title}</h1> 
                                <p>{articleContent.content}</p> 
                            </div>
                })}
            </div>
        )
    }
}


export default ArticlesList;
