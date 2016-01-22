import 'styles/modules/header/navigation/_navigation'

import React, {Component} from 'react'
import Navigation from 'js/modules/header/navigation/Navigation'

class Header extends Component {
  render () {
    return (
      <header className='header-nav'>
        <Navigation/>
      </header>
    )
  }
}

export default Header
