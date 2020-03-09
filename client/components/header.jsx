import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { averageGrade } = this.props;
    return (
      <React.Fragment>
        <header>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4">
              <h1 className="text-success pl-2" id="page-title">Student Grade Table</h1>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4" id="average-grade-container">
              <h4 className="text-dark float-right pr-4 pt-2">Average Grade <span className="badge badge-secondary">{averageGrade}</span></h4>
            </div>
          </div>
        </header>
        <hr className="mb-4" />
      </React.Fragment>
    );
  }
}

export default Header;
