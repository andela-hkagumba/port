import React, {Component} from 'react'
import MetaTags from 'js/modules/header/seo/Seo'
import Header from 'js/modules/header/Header'
import Footer from 'js/modules/footer/Footer'
import Home from 'js/modules/home/HomePage'

class App extends Component {
  componentWillMount () {
    let seo = new MetaTags()
    seo.setTitle()
    seo.setLinks()
    seo.setMetas()
  }
  render () {
    return (
      <div>
        <Header/>
          <Home/>
        <Footer/>
      </div>
    )
  }
}

export default App
