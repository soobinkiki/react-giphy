function Results (props) {    
    return (
        <div>
            <h1>{props.data.title}</h1>
            <img src={props.data.images.fixed_height.url} alt={props.data.title} />
        </div>
    )

}

export default Results