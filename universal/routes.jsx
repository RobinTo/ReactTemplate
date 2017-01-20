import React     from 'react';
import { Match, Miss } from 'react-router';
import App from './components';
import Home from './components/Home';

export default class RouterApp extends React.Component {
  render() {
    return (
      <div id="my-app-routes">
        <Match pattern="/" component={App} />
        <Match exactly pattern="/home" component={Home} />
      </div>
    );
  }
}
