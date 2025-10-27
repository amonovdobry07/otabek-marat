import './App.css'
import Contact from './components/Contact/Contact'
import Haqimizda from './components/Haqimizda/Haqimizda'
import Header from "./components/Header"
import Tavarlar from './components/Tavarlar/Tavarlar'
import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import translationsUz from "./Loceles/translationsUz.js"
import translationsEn from "./Loceles/translationsEn.js"
import translationsRu from "./Loceles/translationsRu.js"


i18n.use(initReactI18next).init({
    resources: {
        uz: {translation: translationsUz},
        en: {translation: translationsEn },
        ru: {translation: translationsRu},
    },
    lng: "uz",
    fallbackLng: "uz"
})
function App() {
  return (
    <div className='App'>
        <Header />  
        <Tavarlar /> 
        <Haqimizda /> 
        <Contact /> 
    </div>
  )
}

export default App
