import { getHeroesByPublisher } from "../helpers"
import PropTypes from 'prop-types';
import { HeroeItem } from "./HeroeItem";
import { useMemo } from "react";

export const HeoreList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) 

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {heroes.map((heroe) => (
                <HeroeItem key={heroe.id} {...heroe}/>
            ))}
        </div>
    )
}


HeoreList.propTypes = {
    publisher: PropTypes.string.isRequired
}