import React from 'react';
import { render } from 'react-dom';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  
  goToStore(e) {
    e.preventDefault();
    //grab text from text input
    console.log(this.storeInput.value);
    //transition from / to /store/storeId
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;