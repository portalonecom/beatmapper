import React from 'react';
import { Link as RRLink } from 'react-router-dom';

export const shouldUseAnchor = to =>
  !!(to.match(/^https?:\/\//i) || to.match(/^mailto:/) || to.match(/^#/));

const BaseLink = ({ to = '', children, forceAnchor, ...delegated }) => {
  if (shouldUseAnchor(to) || forceAnchor) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...delegated}>
        {children}
      </a>
    );
  } else {
    return (
      <RRLink to={to} {...delegated}>
        {children}
      </RRLink>
    );
  }
};

export default BaseLink;
