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
    topicId: React.PropTypes.string.isRequired,
    topicName: React.PropTypes.string.isRequired,
    requestLinks: React.PropTypes.func.isRequired,
    //startAdd: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    console.log(`TopicName: ${this.props.topicName}`);
    if (this.props.topicId) {
      this.props.requestLinks(this.props.topicId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicId !== this.props.topicId) {
      this.props.requestLinks(newProps.topicId);
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
    requestLinks: (topicId) => dispatch(requestLinks(topicId)),
    startAdd: (topicId) => dispatch(startAdd(topicId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
