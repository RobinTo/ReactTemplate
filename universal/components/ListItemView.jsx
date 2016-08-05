import React from 'react';
export default class ListItemView extends React.Component {
  handleDelete(e) {
    const id = Number(e.target.dataset.id);

    // Equivalent to `dispatch(deleteItem(id))`
    this.props.deleteItem(id);
  }
  handleEdit(e) {
    const id  = Number(e.target.dataset.id);
    const val = this.props.listItems.get(id).text

    // For cutting edge UX
    let newVal = window.prompt('', val);
    this.props.editItem(id, newVal);
  }

  render() {
    return (
      <div id="item-list">
        {
          this.props.listItems.map( (item, index) => {
            return (
              <div key={index}>
                <span>{item}</span>

                <button data-id={index} onClick={this.handleDelete.bind(this)}>
                  X
                </button>
                <button data-id={index} onClick={this.handleEdit.bind(this)}>
                  Edit
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}
