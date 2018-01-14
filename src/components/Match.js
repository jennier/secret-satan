import React, { Component } from 'react';
import './Match.css';

class Match extends Component {

  showMatchName(name) {
    return <p className="card-text">{name.first} {name.last}</p>
  }

  render() {
    const { giver, receiver } = this.props;
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Giver</h4>
                {this.showMatchName(giver.name)} 
                <p className="card-text">
                  <a href="mailto:{giver.email}" className="btn btn-primary">{giver.email}</a>
                </p>
            </div>
          </div>
        </div>
        <div className="col-sm-2 text-center arrow"> 
          <i className="fa fa-arrow-right fa-5x" aria-hidden="true"></i>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Receiver</h4>
                 {this.showMatchName(receiver.name)} 
                <p className="card-text">
                    <a href="mailto:{giver.email}" className="btn btn-primary">{receiver.email}</a>
                </p>
             </div>
          </div>   
        </div>
      </div>
    );
  }
}

export default Match;