import React from 'react';
import LatestInfo from '../components/elements/LatestInfo';
import FeatContainer from '../components/features/FeatContainer';
import SideCont from '../components/elements/SideCont';
import SearchElement from '../components/elements/SearchElement';
import ListContent from '../components/elements/ListContent';
import SelectedArticleContainer from '../components/features/SelectedArticleContainer';
import SelectedFatawas from '../components/features/SelectedFatawas';
import Stats from '../components/elements/Stats';
import ImageElement from '../components/elements/ImageElement';

const HomePage = () => {
  const categories = ['cate', 'gory', 'cate', 'gory', 'cate', 'gory'];
  const stats = {noOfVisitor: 1350, noOfQuestion: 1200, noOfAnswer: 850}
  return <div>
    <div className="contana mb-4 mt-4">
      <div className="w-full">
        <LatestInfo latestInfo="this is the latest informaation" />
      </div>
      <div className="row th-mt-30">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <SideCont head="search" className="th-pt-4">
            <div className="py-5">
              <SearchElement btnType="icon" />
            </div>
          </SideCont>
          <SideCont head="categories">
            <ListContent categories={categories} />
          </SideCont>
          <SideCont head="stats">
            <Stats stats={stats} />
          </SideCont>
        </div>
        <div className="col-lg-9 col-md-8 col-sm12">
          <FeatContainer />
          <SelectedArticleContainer />
          <SelectedFatawas />
          <ImageElement imgData={{image:'al-med-ads.png'}} />
        </div>
      </div>
    </div>
  </div>
}

export default HomePage;
