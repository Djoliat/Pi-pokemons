import { getPokemonDetail } from "../../redux/actions";
import {useParams} from "react-router-dom"
import {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import CardDetail from "../Card/CardDetail";

//useSelectorpara traer info del estado global al componente
const Detail = ()=>{
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getPokemonDetail(id))
    },[id])
    const info = useSelector((state)=>state.detail)
    return (
        <div>
       {info.map(({id,name,img,hp, attack, defense, speed, height, weight, types})=>{
        return(
            <CardDetail
            key={id}
            id= {id}
            name={name}
            hp={hp}
            attack={attack}
            defense={defense}
            speed={speed}
            height={height}
            weight={weight}
            types={types}
            img={img}

            />

        )
       })}

        </div>
    )
}

export default Detail