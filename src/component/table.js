import React, { useEffect, useState } from 'react';
import {Collapse} from "reactstrap"
import '../App.css'



const Table=({books,sortopen})=>{

   useEffect(()=>{
        function compare( a, b ) {
            if ( a.title < b.title ){
              return -1;
            }
            if ( a.title > b.title ){
              return 1;
            }
            return 0;
          }
          
          books.sort( compare );
   })
   

   const Row=(props)=>{
     const {book} = props;
     const [open,setOpen] = useState(false)
     return(
       <>
      <tr >
      <td onClick={() => setOpen(!open)}><span aria-label="expand row" size="small" >
            {open ? <p>&#8593;</p> : <p>&#8595;</p>}
          </span></td>   
      <td>{book.title     }</td>
      <td>{book.price     }</td>
      <td>{book.categories}</td>
      <td>{book.authors   }</td>
      <td>{book.status    }</td> 
      </tr>
      <tr>
        
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse isOpen={open} className="container m-5 " >
        <div className="collase_box">
        <div className=" ">
        <div class="split left">
          <div class="centered">
            <img src={book.thumbnailUrl}/>
            <h3>{book.title}</h3>
            <p><b>Price:</b> {book.currency}  {book.price}</p>
            <p><b>Discount:</b> {book.discount}  {book.discountUnits}</p>
          </div>
        </div>
        <div class="split right">
          <div class="centered">
          {
            book.authors?<div><h4><b>Author:</b></h4>
            <p>{book.authors}</p></div>:''
          }
          {
            book.shortDescription?<div><h4><b>Short Description:</b></h4>
            <p>{book.shortDescription}</p></div>:''
          }{
            book.longDescription?<div><h4><b>Long Description:</b></h4>
            <p>{book.longDescription}</p></div>:''
          }
            
            
          </div>
        </div>
        </div>
        </div>
        </Collapse>
        </td>
      </tr>
      </>
     )
   }
    return(
        <div>
        <table class="table ">
        <thead class="thead-dark">
            <tr>
                <th>Details</th>
                <th >Title 
          </th>
                <th>Price</th>
                <th>Categories</th>
                <th>Authors</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
    { 
        books.map((book,i)=>{
                return(
        <Row key={i} book={book}/>
    )
    })}
    </tbody>
        </table>
        </div>
    )
}


export default Table