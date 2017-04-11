/*
 *
 * NewsletterListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNewsletterListContainer from './selectors';

export class NewsletterListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>Newsletters</h1>
      </div>
    );
  }
}

const mapStateToProps = selectNewsletterListContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterListContainer);
