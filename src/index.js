import React from 'react'
import ReactDOM from 'react-dom'

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Tyler McGinnis',
      friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
    }
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map((friend) => <li>{friend}</li>)}
        </ul>
      </div>
    )
  }
}

// class HelloUser extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       username: 'tylermcginnis'
//     }

//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange (e) {
//     this.setState({
//       username: e.target.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         Hello {this.state.username} <br />
//         Change Name:
//         <input
//           type="text"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//       </div>
//     )
//   }
// }

ReactDOM.render(<FriendsContainer />, document.getElementById('root'));