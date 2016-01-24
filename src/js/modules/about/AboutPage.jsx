import 'styles/modules/about/_aboutpage'

import React, {Component} from 'react'
import InlineSvg from 'js/modules/common/InlineSvg'
import MeAnimation from 'js/modules/about/MeAnimation'

class About extends Component {
  componentDidMount () {
    let meAnim = new MeAnimation()
    meAnim.lineMeUp()
  }
  handleMouseEnter () {
    let meAnim = new MeAnimation()
    meAnim.colorMeUp()
  }
  handleMouseLeave () {
    let meAnim = new MeAnimation()
    meAnim.lineMeUp()
  }
  render () {
    return (
      <section className='about'>
        <section className='me-svg' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <InlineSvg name='me'/>
        </section>
        <section className='about-me'>
          <h2>About Me</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>
      </section>
    )
  }
}

export default About
