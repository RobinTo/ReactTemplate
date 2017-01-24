import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div id="site-wide-header">
        <h1>Site wide header</h1>
        <p>This is a site wide header. The placement is determined in routes.jsx.</p>
        <hr />
      </div>
    );
  }
}
