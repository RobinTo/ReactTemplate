import React from 'react';
import ListItemView from './ListItemView';
import ListItemForm from './ListItemForm';
import { bindActionCreators } from 'redux';
import * as ListItemActions from '../actions/ListItemActions';
import { connect } from 'react-redux';

@connect(state => ({ listItems: state.listItems }))
export default class Home extends React.Component {
  render() {
    const { listItems, dispatch } = this.props;

    return (
      <div id="listItem-list">

        <ListItemView listItems={listItems}
          {...bindActionCreators(ListItemActions, dispatch)} />

        <ListItemForm
          {...bindActionCreators(ListItemActions, dispatch)} />
      </div>
    );
  }
}
