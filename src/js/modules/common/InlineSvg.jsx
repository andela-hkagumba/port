import React, {Component} from 'react'

class InlineSvg extends Component {
  render () {
    let svg = require(`img/${this.props.name}.svg`)
    return (
      <span dangerouslySetInnerHTML={{__html: svg}}>
      </span>
    )
  }
}

InlineSvg.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default InlineSvg
