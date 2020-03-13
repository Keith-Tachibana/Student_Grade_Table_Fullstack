import React, { Component } from 'react';

class Grade extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    const { deleteGrade, id } = this.props;
    deleteGrade(id);
  }

  handleUpdate() {
    const { updateGrade, id } = this.props;
    updateGrade(id);
  }

  render() {
    const { name, course, grade } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
          <td className="text-right">
            <button
              className="btn btn-primary btn-sm mr-2 operations"
              onClick={this.handleUpdate}
            >
            <i className="fas fa-edit"> Edit</i>
            </button>
            <button
              className="btn btn-danger btn-sm ml-2 operations delete"
              onClick={this.handleDelete}
            >
            <i className="fas fa-trash-alt"> Delete</i>
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Grade;
