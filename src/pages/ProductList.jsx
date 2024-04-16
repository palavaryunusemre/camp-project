import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
} from 'semantic-ui-react'

export default function ProductList() {

  const [products, setProducts] = useState([])
  useEffect(
    ()=>{
      let productService = new ProductService()
      productService.getProducts().then(result=>setProducts(result.data.data))
    })

  return (
    <div><Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Ürün Adı</TableHeaderCell>
          <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
          <TableHeaderCell>Stok Adeti</TableHeaderCell>
          <TableHeaderCell>Açıklama</TableHeaderCell>
          <TableHeaderCell>Kategori</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {
          products.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.productName}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.unitsInStock}</TableCell>
              <TableCell>{product.quantityPerUnit}</TableCell>
              <TableCell>{product.category.categoryName}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableHeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <MenuItem as='a' icon>
                <Icon name='chevron left' />
              </MenuItem>
              <MenuItem as='a'>1</MenuItem>
              <MenuItem as='a'>2</MenuItem>
              <MenuItem as='a'>3</MenuItem>
              <MenuItem as='a'>4</MenuItem>
              <MenuItem as='a' icon>
                <Icon name='chevron right' />
              </MenuItem>
            </Menu>
          </TableHeaderCell>
        </TableRow>
      </TableFooter>
    </Table></div>
  )
}
