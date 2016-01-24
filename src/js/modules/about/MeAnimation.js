import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'

class MeAnimation {
  constructor () {
    this.me = Snap('#me')
    this.jacket = this.me.select('#jacket')
    this.jacketElements = {
      outer: {
        node: this.jacket.select('#jacket-outer')
      },
      maroon: {
        node: this.jacket.select('#jacket-maroon')
      },
      zipline: {
        node: this.jacket.select('#jacket-zipline')
      },
      hood: {
        node: this.jacket.select('#jacket-hood')
      },
      hoodMouth: {
        node: this.jacket.select('#jacket-hood-mouth')
      },
      innerHood: {
        node: this.jacket.select('#jacket-inner-hood')
      },
      innerMostHood: {
        node: this.jacket.select('#jacket-inner-most-hood')
      },
      shimoKambaLeft: {
        node: this.jacket.select('#shimo-kamba-left')
      },
      shimoKambaLeftBack: {
        node: this.jacket.select('#shimo-kamba-left-back')
      },
      shimoKambaRight: {
        node: this.jacket.select('#shimo-kamba-right')
      },
      shimoKambaRightBack: {
        node: this.jacket.select('#shimo-kamba-right-back')
      },
      kambaBackLeft: {
        node: this.jacket.select('#kamba-back-left')
      },
      kambaBackRight: {
        node: this.jacket.select('#kamba-back-right')
      },
      kambaRight: {
        node: this.jacket.select('#kamba-right')
      },
      kambaLeft: {
        node: this.jacket.select('#kamba-left')
      }
    }

    this.uso = this.me.select('#uso')

    this.zeFaceGrp = this.uso.select('#zeFace')
    this.zeFaceElements = {
      neck: {
        node: this.zeFaceGrp.select('#neck')
      },
      neckShadow: {
        node: this.zeFaceGrp.select('#neck-shadow')
      },
      chinShadow: {
        node: this.zeFaceGrp.select('#chin-shadow')
      },
      face: {
        node: this.zeFaceGrp.select('#face')
      },
      beard: {
        node: this.zeFaceGrp.select('#beard')
      },
      leftEar: {
        node: this.zeFaceGrp.select('#left-ear')
      },
      rightEar: {
        node: this.zeFaceGrp.select('#right-ear')
      },
      innerEarLeft: {
        node: this.zeFaceGrp.select('#inner-ear-left')
      },
      innerEarRight: {
        node: this.zeFaceGrp.select('#inner-ear-right')
      }
    }

    this.eye = this.uso.select('#eye')
    this.eyeElements = {
      eyeBrowShadowRight: {
        node: this.eye.select('#eye-brow-shadow-right')
      },
      eyeBrowRight: {
        node: this.eye.select('#eye-brow-right')
      },
      eyeLashesRight: {
        node: this.eye.select('#eye-lashes-right')
      },
      eyeBagRight: {
        node: this.eye.select('#eye-bag-right')
      },
      eyeBallRight: {
        node: this.eye.select('#eye-ball-right')
      },
      irisRight: {
        node: this.eye.select('#iris-right')
      },
      irisInnerRight: {
        node: this.eye.select('#iris-inner-right')
      },
      pupilRight: {
        node: this.eye.select('#pupil-right')
      },
      eyeReflectionRight: {
        node: this.eye.select('#eye-reflection-right')
      },
      eyeBagShadowRight: {
        node: this.eye.select('#eye-bag-shadow-right')
      },
      eyeBrowShadowLeft: {
        node: this.eye.select('#eye-brow-shadow-left')
      },
      eyeBrowLeft: {
        node: this.eye.select('#eye-brow-left')
      },
      eyeLashesLeft: {
        node: this.eye.select('#eye-lashes-left')
      },
      eyeBagLeft: {
        node: this.eye.select('#eye-bag-left')
      },
      eyeBallLeft: {
        node: this.eye.select('#eye-ball-left')
      },
      irisLeft: {
        node: this.eye.select('#iris-left')
      },
      irisInnerLeft: {
        node: this.eye.select('#iris-inner-left')
      },
      pupilLeft: {
        node: this.eye.select('#pupil-left')
      },
      eyeReflectionLeft: {
        node: this.eye.select('#eye-reflection-left')
      },
      eyeBagShadowLeft: {
        node: this.eye.select('#eye-bag-shadow-left')
      }
    }

    this.zeNose = this.uso.select('#zeNose')
    this.zeNoseElements = {
      noseShadow: {
        node: this.zeNose.select('#nose-shadow')
      },
      noseShadow2: {
        node: this.zeNose.select('#nose-shadow2')
      },
      noseShadow3: {
        node: this.zeNose.select('#nose-shadow3')
      },
      nose: {
        node: this.zeNose.select('#nose')
      }
    }

    this.lips = this.uso.select('#lips')
    this.lipsElements = {
      lipShadow: {
        node: this.lips.select('#lip-shadow')
      },
      moustacheLeft: {
        node: this.lips.select('#moustache-left')
      },
      moustacheRight: {
        node: this.lips.select('#moustache-right')
      },
      soulPatch: {
        node: this.lips.select('#soulpatch')
      },
      upperLip: {
        node: this.lips.select('#upper-lip')
      },
      lowerLip: {
        node: this.lips.select('#lower-lip')
      }
    }
  }

  static lineShitUp (elemDict, elems = Object.keys(elemDict)) {
    for (let el of elems) {
      elemDict[el].node.animate({
        fill: '#f7f7f7',
        stroke: '#fe2f2b',
        strokeWidth: '0.4'
      }, 0, mina.bounce)
    }
  }

  static changeMyAttr (elemDict, elems = Object.keys(elemDict), attrs = {}, timing = 0) {
    for (let el of elems) {
      elemDict[el].node.animate(attrs, timing, mina.bounce)
    }
  }

  // lined me
  lineMeUp () {
    const _zF = this.zeFaceElements
    const toHideFace = ['innerEarLeft', 'innerEarRight']
    const toLineFace = ['neck', 'face', 'leftEar', 'rightEar']
    this.constructor.lineShitUp(_zF, toLineFace)
    this.constructor.changeMyAttr(_zF, toHideFace, {
      fill: '#f7f7f7'
    })
    this.constructor.changeMyAttr(_zF, ['beard'], {
      fill: '#fe2f2b'
    })
    this.constructor.changeMyAttr(_zF, ['chinShadow', 'neckShadow'], {
      opacity: 0
    })

    const _j = this.jacketElements
    const toLineJacket = ['outer', 'zipline', 'hood', 'hoodMouth', 'innerHood', 'shimoKambaLeft', 'shimoKambaRight', 'kambaLeft', 'kambaRight', 'kambaBackLeft', 'kambaBackRight']
    const toRedJacket = ['maroon', 'innerMostHood', 'shimoKambaLeftBack', 'shimoKambaRightBack']
    this.constructor.lineShitUp(_j, toLineJacket)
    this.constructor.changeMyAttr(_j, toRedJacket, {
      fill: '#fcc'
    })

    const _l = this.lipsElements
    const toHideLips = ['lipShadow']
    const toLineLips = ['upperLip', 'lowerLip']
    const toRedLips = ['moustacheLeft', 'moustacheRight', 'soulPatch']
    this.constructor.lineShitUp(_l, toLineLips)
    this.constructor.changeMyAttr(_l, toHideLips, {
      fill: '#f7f7f7'
    })
    this.constructor.changeMyAttr(_l, toRedLips, {
      fill: '#fe2f2b'
    })

    const _zN = this.zeNoseElements
    this.constructor.lineShitUp(_zN)

    const _e = this.eyeElements
    const toHideEye = ['eyeBrowShadowLeft', 'eyeBrowShadowRight', 'eyeBagShadowLeft', 'eyeBagShadowRight', 'eyeBagRight', 'eyeBagLeft']
    const toLineEye = ['eyeReflectionLeft', 'eyeReflectionRight', 'irisRight', 'irisLeft', 'eyeBallLeft', 'eyeBallRight']
    const toRedEye = ['eyeBrowRight', 'eyeBrowLeft', 'irisInnerLeft', 'irisInnerRight', 'eyeLashesLeft', 'eyeLashesRight', 'pupilLeft', 'pupilRight']
    this.constructor.lineShitUp(_e, toLineEye)
    this.constructor.changeMyAttr(_e, toHideEye, {
      opacity: 0
    })
    this.constructor.changeMyAttr(_e, toRedEye, {
      fill: '#fe2f2b'
    })
  }

  // Color me
  colorMeUp () {
    const _zF = this.zeFaceElements
    this.constructor.changeMyAttr(_zF, ['innerEarLeft', 'innerEarRight'], {
      fill: '#603813',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_zF, ['neck', 'face', 'leftEar', 'rightEar'], {
      fill: '#8c6239',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_zF, ['beard'], {
      fill: '#1a1a1a',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_zF, ['chinShadow', 'neckShadow'], {
      opacity: '.6',
      strokeWidth: '0'
    })

    const _j = this.jacketElements
    this.constructor.changeMyAttr(_j, ['innerHood', 'outer'], {
      fill: '#b3b3b3',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['maroon'], {
      fill: '#722626',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['hoodMouth'], {
      fill: '#333333',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['innerMostHood', 'shimoKambaLeft', 'shimoKambaRight'], {
      fill: '#666666',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['hood', 'zipline'], {
      fill: '#999999',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['shimoKambaLeftBack', 'shimoKambaRightBack'], {
      fill: '#1a1a1a',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['kambaBackLeft', 'kambaBackRight'], {
      fill: '#1b1464',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_j, ['kambaLeft', 'kambaRight'], {
      fill: '#2e3192',
      strokeWidth: '0'
    })

    const _l = this.lipsElements
    this.constructor.changeMyAttr(_l, ['soulPatch', 'moustacheLeft', 'moustacheRight'], {
      fill: '#1a1a1a',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_l, ['lipShadow'], {
      fill: '#754b28',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_l, ['upperLip'], {
      fill: '#42210b',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_l, ['lowerLip'], {
      fill: '#a67c52',
      strokeWidth: '0'
    })

    const _zN = this.zeNoseElements
    this.constructor.changeMyAttr(_zN, ['noseShadow', 'noseShadow2', 'noseShadow3'], {
      fill: '#603813',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_zN, ['nose'], {
      fill: '#42210b',
      strokeWidth: '0'
    })

    const _e = this.eyeElements
    this.constructor.changeMyAttr(_e, ['eyeBrowLeft', 'eyeBrowRight', 'eyeLashesLeft', 'eyeLashesRight', 'pupilLeft', 'pupilRight'], {
      fill: '#1a1a1a',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_e, ['eyeBrowShadowLeft', 'eyeBrowShadowRight', 'eyeBagShadowLeft', 'eyeBagShadowRight'], {
      fill: '#754b28',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_e, ['eyeBagLeft', 'eyeBagRight'], {
      opacity: '1'
    })
    this.constructor.changeMyAttr(_e, ['eyeBallLeft', 'eyeBallRight'], {
      fill: '#bdccd4',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_e, ['irisLeft', 'irisRight'], {
      fill: '#666666',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_e, ['irisInnerLeft', 'irisInnerRight'], {
      fill: '#603813',
      strokeWidth: '0'
    })
    this.constructor.changeMyAttr(_e, ['eyeReflectionRight', 'eyeReflectionLeft'], {
      fill: '#ffffff',
      strokeWidth: '0'
    })
  }
}

export default MeAnimation
