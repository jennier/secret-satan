import React, { Component } from 'react';
import Match from './Match';
import { findWhere } from 'underscore';

class Matches extends Component {

  renderMatches() {
    const { participants, matchedParticipants } = this.props;
    const matchesList = [];
    matchedParticipants.forEach((match, index) => {
      const giver = findWhere(participants, { userID: match.giver });
      const receiver = findWhere(participants, { userID: match.receiver });
      matchesList.push(
        <Match key={index} giver={giver} receiver={receiver} />
      );
    });
    return (
      <div>
        {matchesList}
      </div>
    );
  }

  render() {
    const matches = this.renderMatches();
    return (
      <div className="matches">
        {matches}
      </div>
    );
  }
}

export default Matches;