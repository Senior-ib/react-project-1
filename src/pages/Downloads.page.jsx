import React from 'react';
import ListContent from '../components/elements/ListContent';
import SideCont from '../components/elements/SideCont';
import SearchElement from '../components/elements/SearchElement';
import AudioPlayer from '../components/elements/AudioPlayer';

const DownloadPage = () => {
    const categories = ['Fatawa', 'aqeedah', 'tefseer', 'buluugu-l-marom', 'zaadul-ma\'ad', 'jeelsatu-l-baseeroh', 'fiqh', 'hadith', 'Al-sharhu-l-qawaneen'];

    const audioLists = [
        {id: 1, title: 'TUHFAT IBN JAZARIY.mp3'},
        {id: 1, title: 'Sheikh-Ahmad Al\'ajmy(Qunuut).mp3'},
        {id: 1, title: '115 DU\'A KHATIM QUR\'AN.mp3'},
        {id: 1, title: 'Special prayer of a\'qiida.mp3'} ]

    return <div className="contana flex th-mt-30">                
    <div className="pt-6 lg:w-1/6">
        <SideCont head="search">
            <SearchElement btnType='icon' />
        </SideCont>
        <SideCont head="category">
            <ListContent categories={categories} />                    
        </SideCont> 
    </div>
    <div className="lg:w-5/6 contana">
        <div className="my-5">
            <SearchElement btnType='text' />
        </div>
        <div className="th-mt-30">
            <AudioPlayer lecture={audioLists} />
        </div>
    </div>
</div>
}

export default DownloadPage;
