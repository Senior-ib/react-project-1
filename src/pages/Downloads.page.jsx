import React from 'react';
import ListContent from '../components/elements/ListContent';
import SideCont from '../components/elements/SideCont';
import SearchElement from '../components/elements/SearchElement';
import AudioPlayer from '../components/elements/AudioPlayer';
import ImageElement from '../components/elements/ImageElement';

const DownloadPage = () => {
    const categories = ['Fatawa', 'aqeedah', 'tefseer', 'buluugu-l-marom', 'zaadul-ma\'ad', 'jeelsatu-l-baseeroh', 'fiqh', 'hadith', 'Al-sharhu-l-qawaneen'];

    const audioLists = [
        {id: 1, title: 'TUHFAT IBN JAZARIY.mp3'},
        {id: 1, title: 'Sheikh-Ahmad Al\'ajmy(Qunuut).mp3'},
        {id: 1, title: '115 DU\'A KHATIM QUR\'AN.mp3'},
        {id: 1, title: 'Special prayer of a\'qiida.mp3'} ]

    return <div className="contana th-mt-30">                
    <div className="row">
    <div className="col-md-3 col-sm-12 p-4">
        <SideCont head="search">
            <SearchElement btnType='icon' />
        </SideCont>
        <SideCont head="category">
            <ListContent categories={categories} />                    
        </SideCont> 
    </div>
    <div className="col-md-8 col-sm-12">
        <div className="th-full-wt mb-5">
            <SearchElement btnType='text' />
        </div>
        <div className="th-mt-30">
            <AudioPlayer lecture={audioLists} />
        </div>
    </div>
    <div className="">
        <ImageElement imgData={{image:'al-med-ads.png'}} />
    </div>
    </div>
</div>
}

export default DownloadPage;
