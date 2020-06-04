import React from 'react';

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/kahilnayton/"
        className="linked-in icon-size"
      ></a>
      <a
        href="https://www.youtube.com/watch?v=bCD669baBEI&feature=youtu.be"
        className="youtube icon-size"
      ></a>
      <span>
        <dark-mode-toggle
          id="dark-mode-toggle"
          legend="Theme Switcher"
          light="Light"
          dark="Dark"
          appearance="switch"
          permanent="false"
        ></dark-mode-toggle>
      </span>
    </footer>
  );
}
