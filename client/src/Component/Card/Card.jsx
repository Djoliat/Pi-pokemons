import style from "./Card.module.css"


const Card = ({id, name, img, types})=>{
return (
    <div className={style.card}>
        <img className={style.img} src={img} alt={name} />
        <h2>{name}</h2>
        <h3>{types?.map((type)=>(
            <span>
                {`${type} ` }
            </span>
        ))}</h3>

    </div>
)
}

export default Card