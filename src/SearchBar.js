import React, { PureComponent } from 'react'

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {};
  }
  handleSearch = (e) => {
    this.props.onInputTextChange(e.target.value)
  }
  handleInStock = (e) => {
    this.props.onInStockChange(e.target.checked)
  }
  render() {
    const { inputText, inStockOnly } = this.props.data;
    return (
      <div>
        <p>
          <input
            type="text"
            onChange={this.handleSearch}
            placeholder="izlash..."
            value={inputText}
          />
        </p>
        <p>
          <input type="checkbox" name='inStock' checked={inStockOnly} onChange={this.handleInStock} id="inStore" />
          <label htmlFor="inStore">Omborda mavjud mahsulotlar</label>
        </p>
      </div>
    )
  }
}
