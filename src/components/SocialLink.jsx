import React from 'react';

function SocialLink({ Icon, href, text }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link">
      <Icon size={22} />
      <span>{text}</span>
    </a>
  );
}

export default SocialLink;