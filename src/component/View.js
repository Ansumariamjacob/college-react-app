import React from 'react'
import Header from './Header'

const View = () => {
  return (
    <div>
        <Header/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">slno</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Last lecture</td>
      <td> Jeffrey Zaslow,Randy Pausch</td>
      <td>150</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>wings of fire</td>
      <td>APJ</td>
      <td>200</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Little women</td>
      <td>Louisa May Alcott </td>
      <td>170</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
</div>
    </div>
  )
}

export default View