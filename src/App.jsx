import './styles/App.css';
import Navbar from './components/Navbar/Navbar'
import React from "react"
import Article from './components/Article/Article.jsx'

import Image1 from './assets/images/article1.png'
import Image2 from './assets/images/article2.png'
import Image3 from './assets/images/article3.png'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section className="article-section">          
        <Article image={Image1} description='descrição da imagem 1' title='Designing Dashboards' provide='NASA' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'></Article>
        <Article image={Image3} description='descrição da imagem 2' title='Vibrant Portraits of 2020' provide='SpaceNews' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'></Article>
        <Article image={Image2} description='descrição da imagem 3' title='36 Days of Malayalam type' provide='Spaceflight Now' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'></Article>
      </section>
    </>
  );
}


export default App;
