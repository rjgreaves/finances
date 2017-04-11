/**
*
* LinkList
*
*/

import React from 'react';

import styles from './styles.css';
import Link from '../Link';
import IconButton from '../IconButton';

function LinkList({ links, newsletterId, newsletterName, children, startAdd }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{newsletterName}</h1>
      {linkNodes}

      <IconButton
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
        onClick={() => startAdd(newsletterId)}
      />

      {children}

    </div>
  );
}

LinkList.propTypes = {
  startAdd: React.PropTypes.func.isRequired,
  children: React.PropTypes.element,
  newsletterName: React.PropTypes.string.isRequired,
  newsletterId: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    _id: React.PropTypes.string.isRequired,
  })),
};

export default LinkList;
