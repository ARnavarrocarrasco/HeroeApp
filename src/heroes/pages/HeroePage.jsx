import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroePage = () => {
    
    const {id}= useParams();
    const navigate = useNavigate();
    
    const hero = useMemo(() => getHeroById(id), [id])

    const onNavigateBack = () => {
      navigate(hero.publisher === 'DC Comics'? '/dc' : '/marvel', {replace: true})
    }

    if (!hero) {
      return <Navigate to='/marvel'/>
    }

    const getImgByHeroId = `/heroes/${id}.jpg`
    
    return (
      <div className="row mt-5">
          <div className="col-4">
            <img
              src={getImgByHeroId}
              alt={hero.superhero}
              className="img-thumbnail animate__animated animate__bounce"
            />
          </div>

          <div className="col-8">
            <h3>{hero.superhero}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> 
                  <b>Alter ego: </b> 
                  {hero.alter_ego}  
                </li>
                <li className="list-group-item"> 
                  <b>Publisher: </b> 
                  {hero.publisher}  
                </li>
                <li className="list-group-item"> 
                  <b>First appearance: </b> 
                  {hero.first_appearance}  
                </li>
              </ul>
            <h5 className="mt-3">
              Characters
            </h5>
            <ol>{hero.characters}</ol>

            <button
              className="btn btn-outline-danger"
              onClick={onNavigateBack}
            >
              Back
            </button>


          </div>
      </div>
    )
  }
  
