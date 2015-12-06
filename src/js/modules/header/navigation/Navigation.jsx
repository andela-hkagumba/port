import React, {Component} from 'react'
import Nav from 'data/nav.json'

class Navigation extends Component {
  render () {
    return (
      <div className='navigation'>
        <ul className='navbar'>{
          Nav.map(link => {
            return <li className={link.align} key={link.title}>{link.title}</li>
          })
        }</ul>
      </div>
    )
  }
}

export default Navigation
