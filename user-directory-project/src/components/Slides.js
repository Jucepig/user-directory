import React, {Component} from 'react'
import Navigation from "./Navigation"
import Data from "../data"

class Slides extends Component {
  constructor() {
    super()

    this.state = {
      users : Data
    }
  }

  render() {
    return (
      <div className="user-container flex-row">
        <section className="user-directory">
          <p className="counter">1/25</p>
          <h1 className="name">FirstName LastName</h1>
          <div id="user-info-1">
            <p><strong>From:</strong> blah blah blah</p>
            <p><strong>Job Title:</strong> blah blah blah</p>
            <p><strong>Employer:</strong> blah blah blah</p>
          </div>
          
          <div id="user-info-2">
            <p><strong>Favorite Movies:</strong></p>
              <ol>
                <li>first</li>
                <li>second</li>
                <li>third</li>
              </ol>
          </div>
        </section>

        <Navigation/>

      </div>
    )
  }
}

export default Slides