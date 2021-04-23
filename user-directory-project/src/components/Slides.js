import React, {Component} from 'react'
import Navigation from "./Navigation"
import Data from "../data"

class Slides extends Component {
  constructor() {
    super()

    this.state = {
      users : Data,
      displayedUser: [{
        id: 0,
        name: { first: "", last: "" },
        city: "",
        country: "",
        employer: "",
        title: "",
        favoriteMovies: [
          "",
          "",
          ""
        ]}],
      index: 0
    }
    this.incIndex = this.incIndex.bind(this)
    this.decIndex = this.decIndex.bind(this)
  }

  componentDidUpdate(pP, prevState) {
    if(this.state.index !== prevState.index){
      let users = this.state.users
      let index = this.state.index
      let selectedUser = users[index]
      this.setState({
        displayedUser: [selectedUser]
      })
    }
  }

  componentDidMount() {
    let users = this.state.users
    let index = this.state.index
    let selectedUser = users[index]
    this.setState({
      displayedUser: [selectedUser]
    })
  }

  incIndex() {
    this.setState({
      index: this.state.index +1
    })
    console.log(this.state.index)
  }

  decIndex() {
    this.setState({
      index: this.state.index -1
    })
    console.log(this.state.index)
  }

  render() {
    const selectedUser = this.state.displayedUser[0];
    return (
      <div className="user-container flex-row">
        <section className="user-directory">
          <p className="counter">{this.state.index + 1}/25</p>
          <h1 className="name">{selectedUser.name.first} {selectedUser.name.last}</h1>
          <div id="user-info-1">
            <p><strong>From: </strong>{selectedUser.city}, {selectedUser.country}</p>
            <p><strong>Job Title: </strong>{selectedUser.title}</p>
            <p><strong>Employer: </strong>{selectedUser.employer}</p>
          </div>
          
          <div id="user-info-2">
            <p><strong>Favorite Movies:</strong></p>
              <ol>
                <li>{selectedUser.favoriteMovies[0]}</li>
                <li>{selectedUser.favoriteMovies[1]}</li>
                <li>{selectedUser.favoriteMovies[2]}</li>
              </ol>
          </div>
        </section>

        <Navigation index={this.state.index} incIndex={this.incIndex} decIndex={this.decIndex}/>

      </div>
    )
  }
}

export default Slides