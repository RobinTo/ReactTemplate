import React     from 'react';
import { Match, Miss } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DefaultView from './components';

export default class RouterApp extends React.Component {
  render() {
    return (
      <div id="my-app-routes">
        <Match pattern="/" component={Header} />
        <Match exactly pattern="/" component={DefaultView} />
        <Match exactly pattern="/home" component={Home} />
        <Match pattern="/" component={Footer} />
      </div>
    );
  }
}
