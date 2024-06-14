// import { HeroeItem } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import queryString from "query-string";
import { getHeroByName } from "../helpers";
import {  HeroeItem } from "../components";

export const SearchPage = () => {
  

  const navigate = useNavigate();
  //obtener el query parameters
  const location = useLocation()
  //siempre se recibe un string
  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroByName(q);

  const showSearch = (q.length == 0)
  const showError = (q.length > 0) && (heroes.length === 0)


  const {searchText, handleInputChange} = useForm({
    searchText: q
  })

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    navigate(`?q=${searchText.toLowerCase().trim()}`)
      
  }

  return (
    <>
        <h1>Search</h1>

        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />

            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Search a hero"
                className="form-control"
                name='searchText'
                value={searchText}
                onChange={handleInputChange}
                autoComplete="off"/>

                <button
                  className="btn btn-info mt-2"
                >
                  Search
                </button>   
            </form>
          </div>

          <div className="col-7">
              <h4>Results</h4>
              <hr />

              <div 
                className="alert alert-primary animate__animated animate__fadeIn"
                style={{display: showSearch ? '': 'none'}} >
                Search hero
              </div>

              <div 
                className="alert alert-danger animate__animated animate__fadeIn"
                style={{display: showError ? '' : 'none'}}>
                No hero with <b>{q}</b>
              </div>

              {
                heroes.map(heroe => (
                  <HeroeItem key={heroe.id} {...heroe} />
                ))
              }
          </div>
        </div>
        
    </>
  )
}
