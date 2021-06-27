import React, { PureComponent } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      inStockOnly: false,
    };
  }
  handleSearch = (inputText) => {
    this.setState({ inputText: inputText });
  };
  handleInStock = (inStockOnly) => {
    this.setState({ inStockOnly: inStockOnly });
  };
  render() {
    return (
      <>
        <SearchBar
          onInStockChange={this.handleInStock}
          onInputTextChange={this.handleSearch}
          data={this.state}
        />
        <ProductTable data={this.state} />
      </>
    );
  }
}
