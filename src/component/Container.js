import React, { useEffect, useState ,Component} from 'react'
import axios from 'axios'
import Table from './table'
import Pagination from './pagination'
import Nav from './Nav'
import '../App.css'

const  Container = () => {
    const [books,setBooks]=useState([])
    const [org,setOrg]=useState([])
    const [currentPage,setCurrentPage]=useState(1);
    const [perPage,setPerPage]=useState(10);
    const [sortType, setSortType] = useState('title');
    const [sortVar, setSortVar] = useState('asc');
    const [sortopen,setSortopen]=useState(true)
    const [searchWord,setSeachWord]=useState(true)


    useEffect(()=>{
        const fetch = async () => {
            const res = await axios.get('http://localhost:5000/getbooks');
            setBooks(res.data);
            setOrg(books)
          };
          fetch();
        }, []);
        useEffect(() => {
          const sortArray = type => {
            const types = {
              title: 'title',
              price: 'price',
              categories: 'categories',
              authors:'authors,'
            };
            const sortProperty = types[type];
            if(sortVar==="dsc"){
            if (sortProperty==='price'){
            const sorted = [...books].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setBooks(sorted);
            }
            else if(sortProperty==='title'){
              const sorted = [...books].sort((a, b) => (b[sortProperty].toUpperCase()> a[sortProperty].toUpperCase())?1:-1);
              setBooks(sorted);
              }
              else{
                const sorted = [...books].sort((a, b) => (b[sortProperty]> a[sortProperty])?1:-1);
                setBooks(sorted);
              }
            }

            else{
              if (sortProperty==='price'){
                const sorted = [...books].sort((a, b) => a[sortProperty] - b[sortProperty]);
                setBooks(sorted);
                }
                else{
                  const sorted = [...books].sort((a, b) => (a[sortProperty] > b[sortProperty])?1:-1);
                  setBooks(sorted);
                  }

            }
          };
          sortArray(sortType);
        }, [sortType,sortVar]);
        const lastIndex =   currentPage * perPage;
        const firstIndex = lastIndex - perPage;
        var currentBook = books.slice(firstIndex,lastIndex)
        console.log(books)
        const paginate=pageNumber=>setCurrentPage(pageNumber)
       
        const search=(e)=>{
          setSeachWord(e.target.value)
          const searchText= e.target.value.toLowerCase().trim()
          console.log(searchText)
          if(!searchText){
            setBooks(org)
          }
          else{
            const filterData= org.filter(item=>{
              return Object.keys(item).some(key=>{
                return item[key].toString().toLowerCase().includes(searchText)
              })
            })
            setBooks(filterData)
          }
          
        }

        return (
          <div>
            <Nav/>

        <div className="container">
          <div className="sidenav">
        <div className="fo">
        <h5>
          <label>No of rows:</label>
          <select className="form-control box" placeholder="Select the order" aria-label=".form-select-lg example" onChange={(e) => setPerPage(e.target.value)} >
            <option value="10">10</option>
            <option value="20">20</option>
            </select>
        </h5>
        <br/>
        <br/>
        <h5>       
            <label for="">Order:</label>
        </h5>
        <select className="form-control box" placeholder="Select the order" aria-label=".form-select-lg example" onChange={(e) => setSortVar(e.target.value)} >
            <option value="asc">Asc</option>
            <option value="dsc">Dsc</option>
            </select>
            </div>

        <br/>
        <br/>
            <h5> <label for="">Sort By</label></h5>
        <select className="form-control box" onChange={(e) => setSortType(e.target.value)}>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="categories">Categories</option>
            <option value="authors">Authors</option>
            </select>
            
        </div>
        <input type="text" name="search" placeholder="Search.. &#128270; " onChange={search}></input>

        
      <Table books={currentBook }  sortopen={sortopen}/>
      <Pagination perPage={perPage} totalBooks={books.length} paginate={paginate} currentPage={currentPage} className="pagination"/>
        </div>
        </div>
    )
}


export default Container