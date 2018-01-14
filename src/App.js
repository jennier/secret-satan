import React, { Component } from 'react';
import Matches from './components/Matches';
import Users from './users.json';
import { pluck, isEmpty, findWhere } from 'underscore';

  const buttonTexts = {
    ASSIGN: 'Match',
    REASSIGN: 'Rematch'
  }

class App extends Component {

  constructor() {
    super();
    this.state = {
      buttonText: buttonTexts.ASSIGN,
      matchedParticipants: [],
      filteredParticipants: [],
      showMatches: false,
    };

    this.makeMatches = this.makeMatches.bind(this);
    this.showIntro = this.showIntro.bind(this);
    this.showMatches = this.showMatches.bind(this);
  }

  makeMatches() {
    const matches = [];
    let possibleReceivers = pluck(Users.users, 'userID');
    Users.users.forEach((user, index) => {
      const availableReceivers = possibleReceivers.filter(userID => {
        return userID !== user.userID
      });
      const randomMatchIndex = Math.floor(Math.random() * availableReceivers.length)
      const randomMatch = availableReceivers[randomMatchIndex];
      matches.push({
        giver: user.userID,
        receiver: randomMatch
      });
    possibleReceivers.splice(possibleReceivers.indexOf(randomMatch), 1);
    });
    this.setState({
      buttonText: buttonTexts.REASSIGN,
      matchedParticipants: matches,
      filteredParticipants: matches,
      showMatches: true,
    });
  }

  showIntro() {
    const { showMatches } = this.state;
    if (!showMatches) {
      return (
        <div className="lead text-center">
          <p>Welcome to the Cut Cat's Secret Satan. Click "Match" to assign members to give and recieve gifts.</p>
        </div>
      );
    } else {
      return (
        <div className="lead text-center">
          <p>Unhappy with the results? Click "Rematch" if you're unsatisfied and want to reassign givers and recievers.</p>
        </div>
      );
    }
  }

  showMatches() {
    const { showMatches, filteredParticipants } = this.state;
    if(showMatches) {
      return (
        <Matches
          participants={Users.users}
          matchedParticipants={filteredParticipants}
        />
      )
    }
    return null;
  }

  render() {
    const { buttonText } = this.state;
    return (
      <div className="container">
        <div className="app">
          <div className="app-header jumbotron text-center">
            <h1>Secret Satan</h1>
            {this.showIntro()}
            <button className="assign-button btn btn-primary" onClick={this.makeMatches} >{buttonText}</button>
          </div>
          <div className="app-content">
            {this.showMatches()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;