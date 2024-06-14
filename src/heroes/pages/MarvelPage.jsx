import { HeoreList } from "../components"



export const MarvelPage = () => {

    const title = 'Marvel Comics'

    return (
      <>
        <h1>{title}</h1>
        <hr />

        <HeoreList publisher={title}/>
      </>
    )
  }