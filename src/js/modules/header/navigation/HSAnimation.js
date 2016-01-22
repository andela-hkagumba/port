import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'

class HSAnimation {
  constructor () {
    this.hsLogo = Snap('#hs-logo')

    this.hsImage = this.hsLogo.select('#hs')

    this.elements = {
      hs1: {
        node: this.hsImage.select('#hs1'),
        paths: {
          open: 'M 60,0.072 43.902,9.584 c -1.463,1.756 -3.22,4.83 -3.22,8.488 0,3.66 0.878,6.878 2.49,8.487 l 32.78,10.243 V 9.582 L 60,0.073 z',
          close: 'M60 12.072l-16.098 9.512c-1.463 1.756-3.22 4.83-3.22 8.488 0 3.66.878 6.878 2.49 8.487l32.78 10.243v-27.22L60 12.073z'
        }
      },
      hs2: {
        node: this.hsImage.select('#hs2'),
        paths: {
          open: 'm 95.707,73.536 9.95,-5.416 V 30.657 l -10.24,-5.415 v 31.025 c 1.462,1.757 2.925,4.978 2.925,8.635 0,3.806 -1.026,6.878 -2.635,8.634 z',
          close: 'M83.707 73.536l9.95-5.416V30.657l-10.24-5.415v31.025c1.462 1.757 2.925 4.978 2.925 8.635 0 3.806-1.026 6.878-2.635 8.634z'
        }
      },
      hs3: {
        node: this.hsImage.select('#hs3'),
        paths: {
          open: 'm 60,99.002 16.1,-9.516 c 2.924,-1.756 2.924,-4.828 2.924,-8.486 0,-3.658 -0.73,-6.88 -2.34,-8.488 L 43.902,62.268 v 27.22 L 60,99 z',
          close: 'M60 87.002l16.1-9.516c2.924-1.756 2.924-4.828 2.924-8.486 0-3.658-.73-6.88-2.34-8.488L43.902 50.268v27.22L60 87z'
        }
      },
      hs4: {
        node: this.hsImage.select('#hs4'),
        paths: {
          open: 'm 24.73,25.39 -8.926,5.414 v 37.464 l 8.78,5.415 V 42.658 C 23.12,40.9 21.95,37.68 21.95,34.023 c 0,-3.66 1.172,-6.877 2.78,-8.633 z',
          close: 'M36.73 25.39l-8.926 5.414v37.464l8.78 5.415V42.658C35.12 40.9 33.95 37.68 33.95 34.023c0-3.66 1.172-6.877 2.78-8.633z'
        }
      }
    }
  }

  initHSNodes () {
    let _ = this.elements
    for (let el of Object.keys(_)) {
      _[el].node.animate({
        path: _[el].paths.close,
        fill: '#fe2f2b'
      }, 1000, mina.bounce)
    }
  }

  animateHSNodes () {
    let _ = this.elements
    for (let el of Object.keys(_)) {
      _[el].node.animate({
        path: _[el].paths.open
      }, 300, mina.bounce)
    }
  }

  initiateHS () {
    this.hsImage.attr({
      transform: 't0,0S0',
      fill: 'white'
    })
  }

  animateHS () {
    this.hsImage.animate({
      transform: 't0,0S1',
      fill: '#fe2f2b'
    }, 500, mina.bounce)
  }

}

export default HSAnimation
