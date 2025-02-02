import React from 'react';
import PropTypes from 'prop-types';

// Validates the full email address.
const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\.,;:\s@\"]+\.)+[^<>()\[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
};

const EmailLink = ({ email }) => {
  const isValidEmail = validateEmail(email);

  return (
    <div
      className="inline-container"
      style={isValidEmail ? {} : { color: 'red' }}
    >
      <a href={isValidEmail ? `mailto:${email}` : ''}>
        {email}
      </a>
    </div>
  );
};

EmailLink.defaultProps = {
  email: 'mec.cunningham2@gmail.com',
};

EmailLink.propTypes = {
  email: PropTypes.string,
};

export default EmailLink;
