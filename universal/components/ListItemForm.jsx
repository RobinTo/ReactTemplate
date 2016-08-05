import React from 'react';
export default class ListItemForm extends React.Component {
  handleSubmit() {
    let node = this.refs['listItem-input'];
    this.props.createItem(node.value);
    node.value = '';
  }

  render() {
    return (
      <div id="listItem-form">
        <input type="text" placeholder="Enter new item" ref="listItem-input" />
        <input type="submit" value="OK!" onClick={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}
