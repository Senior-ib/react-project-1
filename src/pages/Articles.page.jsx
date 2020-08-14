import React from 'react';
import Article from '../components/elements/Article';
import articleDummyData from '../dummy-data/artcle-dummy-data';

const ArticlesPage = () => {
    // console.log(articleDummyData)
    const articles = articleDummyData.map((article, i) => {
        return<div className="mb-4" key={i}>
            <Article data={{...article, showCategory: true}} />
        </div>
    })
    return<div className="contana my-5">
        <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
                {articles}
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
                
            </div>
        </div>
    </div>
}

export default ArticlesPage;
