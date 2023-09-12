
const Card = ({id, name, img, types})=>{
return (
    <div>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h3>{types?.map((type)=>(
            <span>
                {`${type} ` }
            </span>
        ))}</h3>
        <br />
        <br />

    </div>
)
}

export default Card