import React, {Component} from 'react'
import InlineSvg from 'js/modules/common/InlineSvg'
import HSAnimation from 'js/modules/header/navigation/HSAnimation'

class Navigation extends Component {
  componentDidMount () {
    let hs = new HSAnimation()
    hs.initiateHS()
    setTimeout(() => {
      hs.animateHS()
    }, 3000)
  }
  animHs () {
    let hs = new HSAnimation()
    hs.animateHSNodes()
  }
  initHS () {
    let hs = new HSAnimation()
    hs.initHSNodes()
  }
  render () {
    return (
      <nav>
            <ul className='navbar'>
              <li className='home-svg align-left'>
                <a href='' onMouseEnter={this.animHs} onMouseLeave={this.initHS}>
                  <InlineSvg
                    name='hs-logo'
                    />
                </a>
              </li>
              <li className='align-center'><a href=''>About</a></li>
              <li className='align-center'><a href=''>Playground</a></li>
              <li className='align-center'><a href=''>Contact</a></li>
            </ul>
      </nav>
    )
  }
}

export default Navigation
