import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import articleDummyData from '../dummy-data/artcle-dummy-data';
import './pages.css';
import ImageElement from '../components/elements/ImageElement';
import Article from '../components/elements/Article';
import SocialHandles from '../components/features/SocialHandles';

const ArticlePage = (props) => {
    const [article, setArticle] = useState(articleDummyData[0]);
    const [articles, setArticles] = useState([articleDummyData[1], articleDummyData[2]]);
    return <div className="">
        <div className="social-left">
            <p style={{marginLeft: 20}}>Share</p>
            <SocialHandles isColumn={true} />
        </div>
        <div className="sides-30">
            <div className="article">
                <div className='headings'>
                    <div>
                        <button type="button" className="btn btn-success">{article.category}</button>
                    </div>
                    <div  className="title">
                        <p>{article.title}</p>
                    </div>
                    <div className="">
                        <span className="author"><i class='fa fa-calendar pr-1' style={{fontSize:16}}></i>Posted on {article.publishedDate}</span>
                        <span className="author"><i class='fa fa-microphone' style={{fontSize:16}}></i> by {article.author}</span>
                    </div>
                </div>
                <div className="body sides-30">
                    <p>
                        {article.content}
                    </p>
                </div>                
                <div className="">
                    <ImageElement imgData={{image:'al-med-ads.png'}} />
                </div>
            </div>
        </div>
        
        <div className="bt-1 med-mb center med-pt">
                <p>People also read</p>
                <div className="contana">
                    <div className="row">
                        {
                            articles.map((article, i) => {
                                return <div className="col-lg-6 col-md-6 col-sm-12" key={i}>
                                <Article data={article} />
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
    </div>
}

export default withRouter(ArticlePage);
