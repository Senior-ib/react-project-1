import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({data}) => {
    const articleCard = <div className="card">
    <div className="card-img-top rel-div">
        <img className="card-img-top" style={{height: 350}} src={data.image} alt="Card image cap" />
        {data.showCategory && <button type="button" className="btn btn-success abs-top">{data.category}</button>}
    </div>
    <div className="card-body">
        <a href={`/article/${data.id}`}><h5 className="card-title">{data.title}</h5></a>
        <p className="card-text" style={{fontSize: 14}}>{data.content.slice(0, 500)+ ' ...'}</p>
        <a href={`/article/${data.id}`} className="btn btn-primary">Read more</a>
    </div>   
</div>

    const featuredArticle = <div className="row">
        <div className='col-md-4'>
            <img className="" src={data.image} alt="" />
        </div>
        <div className="col-md-8">
            <p>e a button and change it with appropriate styles. Learn more: htt</p>
        </div>
    </div>

    return <div className="">
        {
            articleCard
        }
    </div>
}

export default Article;
