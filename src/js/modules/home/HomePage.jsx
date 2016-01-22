import 'styles/modules/home/_homepage'

import React, {Component} from 'react'
import Hero from 'js/modules/home/Hero'

class Home extends Component {
  render () {
    return (
      <section className='home'>
        <Hero/>
      </section>
    )
  }
}

export default Home
