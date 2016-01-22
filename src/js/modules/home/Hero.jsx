import React, {Component} from 'react'
import InlineSvg from 'js/modules/common/InlineSvg'
import HeroAnimation from 'js/modules/home/HeroAnimation'

class Hero extends Component {
  componentDidMount () {
    let hero = new HeroAnimation()
    hero.initHSLarge()
    setTimeout(() => {
      hero.animateSep()
    }, 3000)
  }
  render () {
    return (
      <header className='hero'>
        <InlineSvg name='hero_device'/>
        <InlineSvg name='hs-logo-init'/>
        <InlineSvg name='devices'/>
      </header>
    )
  }
}

export default Hero
