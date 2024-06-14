import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {
    const validPublishes  = ['DC Comics', 'Marvel Comics'];

    if (!validPublishes.includes(publisher)) {
        throw new Error(`${publisher} no es un publisher válido`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
    
}
