/*
 *
 * Authorization
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuthorization from './selectors';

export class Authorization extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectAuthorization();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
