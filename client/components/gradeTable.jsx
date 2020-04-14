import React, { Component } from 'react';

import Grade from './grade';

class GradeTable extends Component {
  render() {
    const studentGrades = this.props.grades.map(grade => {
      return (
        <Grade
          key={grade.gradeId}
          id={grade.gradeId}
          name={grade.name}
          course={grade.course}
          grade={grade.grade}
          deleteGrade={this.props.deleteGrade}
          updateGrade={this.props.updateGrade}
        />
      );
    });
    return (
      <React.Fragment>
        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 pl-4">
          <table className="table table-dark table-striped table-borderless table-hover">
            <caption className="pl-2">Student Grade Table by Keith Tachibana</caption>
            <thead className="bg-success">
              <tr>
                <th scope="col">Student Name</th>
                <th scope="col">Course</th>
                <th scope="col">Grade</th>
                <th scope="col" className="pr-4 text-right">Operations</th>
              </tr>
            </thead>
            <tbody>
              {this.props.grades.length === 0 ? <tr><td colSpan="4" className="text-center">{'No Grades Recorded'}</td></tr> : <>{studentGrades}</>}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default GradeTable;
