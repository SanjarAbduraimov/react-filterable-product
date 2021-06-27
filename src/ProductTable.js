import React, { PureComponent } from 'react'
import { UserConsumer } from './userContex';

export default class ProductTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <UserConsumer>
        {
          products => {
            return (
              <table>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>narxi</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((product) => {
                      const { name, price, inStock } = product;
                      const status = inStock ? null : "red";
                      const { inputText, inStockOnly } = this.props.data;
                      if (name.indexOf(inputText) === -1) return
                      if (inStockOnly && !inStock) return
                      return (
                        <tr key={name} style={{ color: status }}>
                          <td>{name}</td>
                          <td>{price}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            )
          }

        }
      </UserConsumer>
    )
  }
}
