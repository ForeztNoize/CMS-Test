
import { Component } from 'react';
import ArticleData from '../Data/articles.json';
class ArticlesList extends Component{
    render(){
        return (
            <div>
                <h1>Here comes data</h1>
                {ArticleData.map((articleContent, index)=>{
                    return <h1>{articleContent.title}</h1>
                })}
            </div>
        )
    }
}


export default ArticlesList;
