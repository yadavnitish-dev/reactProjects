import { useState } from 'react'
import RandomColor from './components/RandomColor/index.jsx'
import StarRating from './components/StarRating/index.jsx'
import ImageSlider from './components/ImageSlider/index.jsx'
import LoadMoreProducts from './components/LoadMoreProducts/index.jsx'
import QRCodeGenerator from './components/QRCodeGenerator/index.jsx'
import ScrollIndicator from './components/Scroll-Indicator/index.jsx'
import Modal from './components/Popup-Modal/index.jsx'
import GithubProfile from './components/Github-profile-finder/index.jsx'
import Autocomplete from './components/Search-autocomplete/index.jsx'
import TicTacToe from './components/tic-tac-toe/index.jsx'
import { FeatureContextProvider } from './components/Feature-flag/context/index.jsx'
import FeatureFlag from './components/Feature-flag/index.jsx'
import UseFetchHook from './components/Custom-UseFetch/test.jsx'

function App() {

  return (
    <>
    {/* <RandomColor/> */}
    {/* <StarRating /> */}
    {/* <ImageSlider/> */}
    {/* <LoadMoreProducts/> */}
    {/* <QRCodeGenerator/> */}
    {/* <ScrollIndicator /> */}
    {/* <Modal /> */}
    {/* <GithubProfile /> */}
    {/* <Autocomplete /> */}
    {/* <TicTacToe/> */}
{/*     
    <FeatureContextProvider>
      <FeatureFlag/>
    </FeatureContextProvider> */}

    <UseFetchHook />

    </>
    

  )
}

export default App
