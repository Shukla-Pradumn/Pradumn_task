import React,{useState} from 'react';
import product from './product.json'
function Card() { 
    const [filteredResults, setFilteredResults] = useState(product);
    const [searchInput, setSearchInput] = useState('');

    // searching functionality
    const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = product.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(product)
      }
  }

  return(
  <>
    {/*Navbar Start  */}
    <nav className="navbar navbar-light bg-light ">
        <div className="container d-flex justify-content-between">
          <form className="col-sm-6">
            <input className="form-control me-2" type="search" onChange={(e) => searchItems(e.target.value)} placeholder="Search" aria-label="Search"/> 
          </form>
        </div>
    </nav>
    {/*Navbar  End */}

    {/* Container */}
    <div className="container my-3 bg-light">
      <div className='row my-2'>
        {
          filteredResults.map((curEle) => {
          return(
            <div className="card mx-1 my-2 "style={{width: '16rem'}} key={curEle.sku} >
                <img style ={{height:"150px",width:"230px"}}src={curEle.image} className="card-img-top my-1" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{curEle.name}</h5>
                    <h6>Model No. : {curEle.model}</h6>
                    <p className="card-text">$ {curEle.price}</p>
                    <a href={curEle.url} className="btn btn-light">Shop Now</a>
                    
                </div>
            </div>
          )
          })
        }
      </div>

      
    </div>    
  </>
  );
}

export default Card;