import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedList extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('Tweed will receive props');
  }

  componentWillMount() {
    console.log('Tweed will mount');
    /* stop from */
    return false;
  }

  /* is triggered right after the state change */
  componentWillUpdate() {
    console.log('Tweed will update');
  }
  /*
  triggered right after rendering
  use case: posting to database after the form submisison
  */
  componentDidUpdate() {
    console.log('Tweed did update');
  }

  render() {
    console.log('Tweed rendering', this.state);
    return (
      <div>
      { this.props.data.map (tweed => {
        return <Tweed tweed={tweed} key={tweed.id} />
      })}
      </div>
    )
  }
}

export default TweedList;
