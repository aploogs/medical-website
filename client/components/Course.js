import React from 'react';
import $ from 'jquery';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { course: {} };
  }

  componentDidMount() {
    $.ajax({
      url: `/api/courses/${this.props.params.id}`,
      type: 'GET',
    }).done( (course) => {
      this.setState({ course });
    });
  }

  render() {
    let { course, subject, length } = this.state.course;
    return (
      <div className="container">
        <h3>{course}</h3>
        <h5>{subject}</h5>
        <blockquote>{lyrics}</blockquote>
      </div>
    );
  }
}

export default Course;
