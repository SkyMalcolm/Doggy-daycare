
const Info = ({activeDog}) => {
    return(
        <div>
                <h1>{activeDog.name}</h1>
                <img src={activeDog.img}/>
        </div>
    )
}

export default Info;