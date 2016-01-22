import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'

class HeroAnimation {
  constructor () {
    this.heroImg = Snap('#hero')
    this.hs = Snap('#hs-logo-init')
    this.hsImage = this.hs.select('#hs-init')
    this.hsElements = {
      hs1: {
        node: this.hsImage.select('#hs1-init'),
        paths: {
          open: 'M 60,0.072 43.902,9.584 c -1.463,1.756 -3.22,4.83 -3.22,8.488 0,3.66 0.878,6.878 2.49,8.487 l 32.78,10.243 V 9.582 L 60,0.073 z',
          close: 'M60 12.072l-16.098 9.512c-1.463 1.756-3.22 4.83-3.22 8.488 0 3.66.878 6.878 2.49 8.487l32.78 10.243v-27.22L60 12.073z'
        }
      },
      hs2: {
        node: this.hsImage.select('#hs2-init'),
        paths: {
          open: 'm 95.707,73.536 9.95,-5.416 V 30.657 l -10.24,-5.415 v 31.025 c 1.462,1.757 2.925,4.978 2.925,8.635 0,3.806 -1.026,6.878 -2.635,8.634 z',
          close: 'M83.707 73.536l9.95-5.416V30.657l-10.24-5.415v31.025c1.462 1.757 2.925 4.978 2.925 8.635 0 3.806-1.026 6.878-2.635 8.634z'
        }
      },
      hs3: {
        node: this.hsImage.select('#hs3-init'),
        paths: {
          open: 'm 60,99.002 16.1,-9.516 c 2.924,-1.756 2.924,-4.828 2.924,-8.486 0,-3.658 -0.73,-6.88 -2.34,-8.488 L 43.902,62.268 v 27.22 L 60,99 z',
          close: 'M60 87.002l16.1-9.516c2.924-1.756 2.924-4.828 2.924-8.486 0-3.658-.73-6.88-2.34-8.488L43.902 50.268v27.22L60 87z'
        }
      },
      hs4: {
        node: this.hsImage.select('#hs4-init'),
        paths: {
          open: 'm 24.73,25.39 -8.926,5.414 v 37.464 l 8.78,5.415 V 42.658 C 23.12,40.9 21.95,37.68 21.95,34.023 c 0,-3.66 1.172,-6.877 2.78,-8.633 z',
          close: 'M36.73 25.39l-8.926 5.414v37.464l8.78 5.415V42.658C35.12 40.9 33.95 37.68 33.95 34.023c0-3.66 1.172-6.877 2.78-8.633z'
        }
      }
    }
    this.heroElements = {
      sep: {
        node: this.heroImg.select('#hero-sep'),
        paths: {
          init: 'm 494.85907,95.917214 -1.79214,0.171964',
          mid: 'M 494.04194,195.86804 493.88406,1.767541',
          end: 'M 361.1036,196.02926 493.92154,5.9005632'
        }
      },
      and: {
        node: this.heroImg.select('#hero-and')
      },
      design: {
        node: this.heroImg.select('#hero-design')
      },
      develop: {
        node: this.heroImg.select('#hero-develop')
      },
      tagline: {
        node: this.heroImg.select('#hero-tagline')
      }
    }

    this.heroDevices = Snap('#devices')
    this.deviceElements = {
      desktop: {
        node: this.heroDevices.select('#hero-desktop')
      },
      laptop: {
        node: this.heroDevices.select('#hero-laptop')
      },
      phone: {
        node: this.heroDevices.select('#hero-phone')
      },
      logos: [
        this.heroDevices.select('#desk-logo'),
        this.heroDevices.select('#lap-logo'),
        this.heroDevices.select('#phone-logo')
      ]
    }
  }

  // 1. HS anim
  // 2. Header hs anim
  // 3. Tagline anim

  static animateHSLogo (hs, style, timing, callback) {
    for (let el of Object.keys(hs)) {
      hs[el].node.animate({
        path: hs[el]['paths'][style]
      }, timing, mina.bounce, callback)
    }
  }

  initHSLarge () {
    const _hs = this.hsImage
    const _hsE = this.hsElements

    _hs.attr({
      fill: '#fe2f2b',
      transform: 't0,0s0.7r45'
    })
    this.constructor.animateHSLogo(_hsE, 'close', 0)
    this.animHSLarge()
  }

  animHSLarge () {
    const _hs = this.hsImage
    const _hsE = this.hsElements

    _hs.animate({
      transform: 't0,0s1r0'
    }, 1000, mina.bounce, this.constructor.animateHSLogo(_hsE, 'open', 1000, () => {
      this.constructor.animateHSLogo(_hsE, 'close', 1000, () => {
        _hs.animate({
          transform: 't0,0s0'
        }, 1000, mina.bounce)
      })
    }))
  }

  initTagSep () {
    const _h = this.heroElements
    const _d = this.deviceElements
    const animatableTxt = ['and', 'design', 'develop', 'tagline']
    const animatableDvs = ['phone', 'laptop', 'desktop']

    _h.sep.node.attr({
      path: _h.sep.paths.init
    })

    animatableTxt.map((el) => {
      _h[el].node.attr({
        transform: 't1000,0'
      })
    })

    animatableDvs.map((el) => {
      _d[el].node.attr({
        transform: 't-1000,0'
      })
    })

    _d.logos.map((logo) => {
      logo.attr({
        transform: 'S0r360'
      })
    })
  }

  animateSep () {
    const _h = this.heroElements
    const _d = this.deviceElements
    const animatableTxt = ['and', 'design', 'develop', 'tagline']
    const animatableDvs = ['phone', 'laptop', 'desktop']

    this.initTagSep()

    // animations
    _h.sep.node.animate({
      path: _h.sep.paths.mid
    }, 300, mina.bounce, () => {
      animatableTxt.map((el) => {
        _h[el].node.animate({
          opacity: 1,
          transform: 't0,0',
          fill: '#fe2f2b'
        }, 900, mina.ease)
      })

      let timing = 0

      animatableDvs.map((el) => {
        timing += 300
        _d[el].node.animate({
          opacity: 1,
          transform: 't0,0'
        }, timing, mina.bounce)
      })

      setTimeout(() => {
        _h.sep.node.animate({
          path: _h.sep.paths.end
        }, 300, mina.bounce, () => {
          _d.logos.map((logo) => {
            logo.animate({
              transform: 'S1r0'
            }, 600, mina.bounce)
          })
        })
      }, 1000)
    })
  }
}

export default HeroAnimation
