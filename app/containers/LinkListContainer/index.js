/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from '../../components/LinkList';
import { requestLinks, startAdd } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    newsletterId: React.PropTypes.string.isRequired,
    newsletterName: React.PropTypes.string.isRequired,
    requestLinks: React.PropTypes.func.isRequired,
    //startAdd: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    console.log(`NewsletterName: ${this.props.newsletterName}`);
    if (this.props.newsletterId) {
      this.props.requestLinks(this.props.newsletterId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.newsletterId !== this.props.newsletterId) {
      this.props.requestLinks(newProps.newsletterId);
    }
  }

  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (newsletterId) => dispatch(requestLinks(newsletterId)),
    startAdd: (newsletterId) => dispatch(startAdd(newsletterId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
