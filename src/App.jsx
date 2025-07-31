import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RandomColor from './components/RandomColor/index.jsx'
import StarRating from './components/StarRating/index.jsx'
import ImageSlider from './components/ImageSlider/index.jsx'
import LoadMoreProducts from './components/LoadMoreProducts/index.jsx'
import QRCodeGenerator from './components/QRCodeGenerator/index.jsx'
import ScrollIndicator from './components/Scroll-Indicator/index.jsx'
import Modal from './components/Popup-Modal/index.jsx'
import GithubProfile from './components/Github-profile-finder/index.jsx'
import Autocomplete from './components/SearchAutocomplete/index.jsx'
import TicTacToe from './components/tic-tac-toe/index.jsx'
import { FeatureContextProvider } from './components/Feature-flag/context/index.jsx'
import FeatureFlag from './components/Feature-flag/index.jsx'
import UseFetchHook from './components/Custom-UseFetch/test.jsx'
import UseOutsideClickHook from './components/Custom-useOutsideClick/text.jsx'
import UseWindowResizeTest from './components/Custom-useWindowResize/test.jsx'
import ScrollToTop_Bottom from './components/ScrollToTop_Bottom/index.jsx'
import ScrollToSection from './components/ScrollToTop_Bottom/scrollToSection.jsx'
import Weather from './components/WeatherApp/Weather/index.jsx'
import Appp from './components/RecipeApp/Appp/index.jsx'
import {RecipeProvider} from './components/RecipeApp/context/index.jsx'
import ShoppingCart from './components/ShoppingCart/ShoppingCartRoutes/index.jsx'
import Counter from './components/CounterWithUndoRedo/index.jsx'
import { Provider } from 'react-redux'
import store from "./components/ShoppingCart/Store/index.jsx"
import PaginationTest from './components/Pagination/test.jsx'
import DigitalClock from './components/DigitalClock/index.jsx'
import Timer from './components/CountdownTimer/test.jsx'
import ProgressBar from './components/StepProgressBar/index.jsx'
import RandomQuote from './components/RandonQuoteGenerator/index.jsx'
import CurrencyConverter from './components/CurrencyConverter/index.jsx'
import FilterProducts from './components/FilterProducts/index.jsx'
import { Music } from 'lucide-react'
import MusicPlayer from './components/MusicPlayer/index.jsx'
import DragNDrop from './components/DragNDrop/index.jsx'
import FormValidation from './components/SimpleFormValidation/index.jsx'


function App() {

  return (
    <>
    {/* <RandomColor/> */}
    {/* <StarRating /> */}
    {/* <ImageSlider/> */}
    {/* <LoadMoreProducts/> */}
    {/* <QRCodeGenerator/> */}
    {/* <ScrollIndicator /> */}
    {/* <GithubProfile /> */}
    {/* <Autocomplete /> */}

        
    {/* <FeatureContextProvider>
      <FeatureFlag/>
    </FeatureContextProvider>  */}
   

    {/* <UseFetchHook /> */}
    {/* <UseOutsideClickHook /> */}
    {/* <UseWindowResizeTest /> */}
    {/* <ScrollToTop_Bottom /> */}
    {/* <ScrollToSection/> */}
    {/* <Weather /> */}

    {/* <BrowserRouter>
      <RecipeProvider>
        <Appp/>
      </RecipeProvider>
    </BrowserRouter> */}

    {/* <Provider store={store}>
      <BrowserRouter>
      <ShoppingCart />
      </BrowserRouter>
    </Provider> 
    <FilterProducts />  */}
    
    
    <Counter />
    <PaginationTest />
    <Modal />
    <TicTacToe/>
    <DigitalClock />
    <Timer />
    <ProgressBar />
    <RandomQuote />
    <CurrencyConverter />
    <MusicPlayer /> 
    <DragNDrop />
    <FormValidation />
    
    </>
  )
}

export default App