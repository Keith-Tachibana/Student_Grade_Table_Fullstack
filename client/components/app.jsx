import React, { Component } from 'react';

import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      currentlyEditing: null
    };
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.updateGrade = this.updateGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  componentDidUpdate() {
    this.getAverageGrade();
  }

  async getGrades() {
    try {
      const response = await fetch('/api/grades');
      const grades = await response.json();
      this.setState({
        grades
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  async addGrade(newEntry, update) {
    if (!update) {
      try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const response = await fetch('/api/grades', {
          method: 'POST',
          body: JSON.stringify(newEntry),
          headers
        });
        const result = await response.json();
        this.setState({
          grades: this.state.grades.concat(result)
        });
      } catch (error) {
        console.error(error.message);
      }
    } else {
      try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const response = await fetch(`/api/grades/${newEntry.gradeId}`, {
          method: 'PUT',
          body: JSON.stringify(newEntry),
          headers
        });
        const result = await response.json();
        this.setState(previous => {
          const newGrades = previous.grades.map(grade => grade.gradeId === result.id ? result : grade);
          return {
            grades: newGrades
          };
        }, () => this.getGrades());
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  async deleteGrade(id) {
    try {
      const { grades } = this.state;
      const deletedGrades = grades.filter(grade => grade.gradeId !== id);
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      await fetch(`/api/grades/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(deletedGrades),
        headers
      });
      this.setState({
        grades: deletedGrades
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  updateGrade(id) {
    const { grades } = this.state;
    const [updatedGrade] = grades.filter(grade => grade.gradeId === id);
    this.setState({
      currentlyEditing: updatedGrade
    });
  }

  getAverageGrade() {
    const { grades } = this.state;
    let result = 0;
    for (let i = 0; i < grades.length; i++) {
      result += grades[i].grade;
    }
    const average = result / grades.length;
    const displayAvg = isNaN(average) ? 'N/A' : average.toFixed(1);
    return displayAvg;
  }

  render() {
    return (
      <React.Fragment>
        <Header averageGrade={this.getAverageGrade()} />
        <main>
          <div className="row main-container">
            <GradeTable
              grades={this.state.grades}
              deleteGrade={this.deleteGrade}
              updateGrade={this.updateGrade}
            />
            <GradeForm
              addGrade={this.addGrade}
              currentlyEditing={this.state.currentlyEditing}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
