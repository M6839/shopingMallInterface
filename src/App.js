import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Mencategories from './components/Mencategories'
import LadiesCategorie from './components/LadiesCategorie'
import Banner from './components/Banner'
import './App.css'
import {MenCategorie,ladiesCategorie} from './data'
import Banner1 from './components/Banner1'


const App = () => {
  const [menFashion,setMenFashion]=useState(MenCategorie)
  const [ladiesFashion,setLadiesFashion]=useState(ladiesCategorie)
  return (
    <div>
    <Header/>
    <Banner/>
    <Mencategories menFashion={menFashion}/>
    <Banner1/>
    <LadiesCategorie ladiesFashion={ladiesFashion}/>
    <Footer/>
    </div>
  )
}

export default App