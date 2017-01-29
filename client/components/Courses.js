import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

//this will allow me to import and export link

let courses = this.state.courses.map( (course) => {
  return (<Link to={`/courses/${course._id}`} key={song._id} className="collection-item">{song.title}</Link>);
});

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.addCourse = this.addCourse.bind(this);
    this.state = { courses: [] };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/courses/',
      type: 'GET',
    }).done( (courses) => {
      this.setState({ courses });
    });
  }

  addCourse(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/courses',
      type: 'POST',
      data: {
        subject: this.refs.subject.value,
        name: this.refs.name.value,
        length: this.refs.name.length
      }
    }).done( (course) => {
      this.refs.form.reset();
      this.setState({ courses: [ { ...course }, ...this.state.courses ]});
    });
  }

  render() {
    let courses = this.state.courses.map( (course) => {
      return (<li key={course._id} className="collection-item">{`${course.subject} ${course.name}`}</li>);
    });

    return (
      <div className="row">
        <form className="col m4" ref="form" onSubmit={this.addCourse}>
          <input ref="subject" placeholder="Subject" />
          <input ref="name" placeholder="Name" />
          <input ref="length" placeholder="Course Length" />
          <button className="btn" type="submit">Add Course</button>
        </form>
        <ul className="col m8 collection">
          {users}
        </ul>
      </div>
    );
  }
}

export default Courses;
