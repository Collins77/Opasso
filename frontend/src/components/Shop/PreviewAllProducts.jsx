// import React from 'react';

// function PreviewAllProducts({ products }) {
//   if (!products || products.length === 0) {
//     return <div>No products available.</div>;
//   }

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Stock</th>
//           <th>Part number</th>
//           <th>Price</th>
//           {/* Add more table headers as needed */}
//         </tr>
//       </thead>
//       <tbody>
//         {products.map((product) => (
//           <tr key={product._id}>
//             <td>{product._id}</td>
//             <td>{product.name}</td>
//             <td>{product.price}</td>
//             <td>{product.partNumber}</td>
//             <td>{product.price}</td>
//             {/* <td>{product.price}</td> */}
//             {/* Add more table cells for additional data */}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default PreviewAllProducts;
