import React from 'react';
import $ from 'jquery';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.addJob = this.addJob.bind(this);
    this.viewJob = this.viewJob.bind(this);
    this.state = { job: {} };
  }

  componentDidMount() {
    $.ajax({
      url: `/api/jobs/${this.props.params.id}`,
      type: 'GET',
    }).done( (jobs) => {
      this.setState({ jobs });
    });
  }

  render() {
    let { jobs, specialty, location } = this.state.jobs;
    return (
      <div className="container">
        <h3>{Jobs}</h3>
        <h5>{specialty}</h5>
        <blockquote>{Hot Jobs}</blockquote>
      </div>
    );
  }
}

export default Job;
