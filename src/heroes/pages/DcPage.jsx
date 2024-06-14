import { HeoreList } from "../components"

export const DcPage = () => {
    const title = 'DC Comics'

    return (
      <>
        <h1>{title}</h1>
        <hr />

        <HeoreList publisher={title} />
      </>
    )
  }
  