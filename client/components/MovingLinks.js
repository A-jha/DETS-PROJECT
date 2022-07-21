import React from "react";

const MovingLinks = ({ links }) => {
  return (
    <div>
      <marquee style={{ display: "flex" }}>
        {links.map((link) => {
          return (
            <a
              href={link.url}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              {link.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>|</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          );
        })}
      </marquee>
    </div>
  );
};

export default MovingLinks;
