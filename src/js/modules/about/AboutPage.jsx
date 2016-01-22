import 'styles/modules/about/_aboutpage'

import React, {Component} from 'react'
import InlineSvg from 'js/modules/common/InlineSvg'

class About extends Component {
  render () {
    return (
      <section className='about'>
        <section className='me-svg'>
          <InlineSvg name='me'/>
        </section>
        <section className='about-me'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>
      </section>
    )
  }
}

export default About
