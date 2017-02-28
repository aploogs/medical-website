import React from 'react';
import Job from './Job';

class JobsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let jobs = this.props.jobs.map( job => {
      let id = job._id;
      return (
        <job
          key={id}
          id={id}
          refresh={this.props.refresh}
          {...job}
        />
      );
    });

    return (
      <div>
        {jobs}
      </div>
    )
  }
}

export default CommentList;
