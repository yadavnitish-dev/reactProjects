import React from 'react'
import { useFeature } from './context'
import GithubProfile from '../Github-profile-finder';
import ImageSlider from '../ImageSlider';
import PopUpModal from '../Popup-Modal';
import TicTacToe from '../tic-tac-toe';
import RandomColor from '../RandomColor';
import LoadMoreProducts from '../LoadMoreProducts';
import QRCodeGenerator from '../QRCodeGenerator';

const FeatureFlag = () => {
    const {enabledFlags, loading} = useFeature();

    const componentsToRender = [
        {
            key : "showGithubProfile",
            component : <GithubProfile />
        },
        {
            key : "showImageSlider",
            component : <ImageSlider />
        },{
            key : "showModalPopup",
            component : <PopUpModal />
        },{
            key : "showTictacToe",
            component : <TicTacToe />
        },{
            key : "showRandomColor",
            component : <RandomColor />
        },{
            key : "showLoadMoreProducts",
            component : <LoadMoreProducts />
        },{
            key : "showQRCodeGenerator",
            component : <QRCodeGenerator />
        },
    ]

    const checkEnabledFlags = (getCurrentKey)=>{
        return enabledFlags[getCurrentKey];
    }

    if(loading) return <div>Loading data please wait!!!!</div>
  return (
    <div>
        {componentsToRender.map(componentItem=> checkEnabledFlags(componentItem.key) ? componentItem.component : null)}
    </div>
  )
}

export default FeatureFlag