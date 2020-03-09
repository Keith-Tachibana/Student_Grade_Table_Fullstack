import React, { Component } from 'react';

class GradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
      gradeId: null,
      update: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentlyEditing } = this.props;
    if (currentlyEditing !== prevProps.currentlyEditing) {
      this.setState({
        name: currentlyEditing.name,
        course: currentlyEditing.course,
        grade: currentlyEditing.grade,
        gradeId: currentlyEditing.gradeId,
        update: true
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addGrade } = this.props;
    if (this.state.update) {
      const newEntry = {
        name: this.state.name,
        course: this.state.course,
        grade: parseInt(this.state.grade),
        gradeId: this.state.gradeId
      };
      addGrade(newEntry, true);
      this.clearFields();
    } else {
      const newEntry = {
        name: this.state.name,
        course: this.state.course,
        grade: parseInt(this.state.grade)
      };
      addGrade(newEntry, false);
      this.clearFields();
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.clearFields();
  }

  clearFields() {
    const clearFields = {
      name: '',
      course: '',
      grade: '',
      update: false
    };
    this.setState(clearFields);
  }

  renderHeading() {
    return this.state.update
      ? <h3 className="mb-4 ml-4">Update Grade</h3>
      : <h3 className="mb-4 ml-4">Add Grade</h3>;
  }

  renderButton() {
    return this.state.update
      ? <button
        type="submit"
        className="ml-4 btn btn-primary"
        name="update">
        Update
      </button>
      : <button
        type="submit"
        className="ml-4 btn btn-success"
        name="add">
        Add
      </button>;
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          {this.renderHeading()}
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-4 pr-3">
              <div className="input-group-prepend">
                <i className="input-group-text fas fa-user-plus pt-2 ml-4"></i>
              </div>
              <input
                autoFocus
                type="text"
                name="name"
                className="form-control mr-4"
                placeholder="Student Name"
                size="25"
                value={this.state.name}
                required="required"
                onChange={this.handleChange}
              />
              <small className="text-muted form-text w-100 ml-4">Please enter a valid student name</small>
            </div>
            <div className="input-group mb-4 pr-3">
              <div className="input-group-prepend">
                <i className="input-group-text fas fa-book pt-2 pr-3 ml-4"></i>
              </div>
              <input
                type="text"
                name="course"
                className="form-control mr-4"
                placeholder="Student Course"
                size="25"
                value={this.state.course}
                required="required"
                onChange={this.handleChange}
              />
              <small className="text-muted form-text w-100 ml-4">Please enter a valid course name</small>
            </div>
            <div className="input-group mb-4 pr-3">
              <div className="input-group-prepend">
                <i className="input-group-text fas fa-percent pt-2 pr-3 ml-4"></i>
              </div>
              <input
                type="number"
                name="grade"
                className="form-control mr-4"
                placeholder="Student Grade"
                size="25"
                value={this.state.grade}
                required="required"
                onChange={this.handleChange}
                min="0"
                max="100"
              />
              <small className="text-muted form-text w-100 ml-4">Please enter a student grade from 0 to 100</small>
            </div>
            {this.renderButton()}
            <button
              onClick={this.handleReset}
              className="ml-4 btn btn-warning"
              name="cancel">
              Cancel
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default GradeForm;
