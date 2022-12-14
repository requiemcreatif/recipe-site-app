import { useFetch } from "../../hooks/useFetch"
import RecipeList from "../../components/RecipeList"
import "./Home.css"

const Home = () => {
    const {data, isPending, error} = useFetch("http://localhost:3000/recipes")

  return (
    <div className="home">
        
        {error && <p className="error">{error} </p>}
        {isPending && <p className="loading">Loading... </p>}
        {data && <RecipeList recipes={data} isPending={isPending} error={error}/>}
    </div>
  )
}

export default Home