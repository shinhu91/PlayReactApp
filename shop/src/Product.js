function Product(props) {

    return (
        <div className="col-md-4">
            <img src={props.shoes.img} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </div>
    )
}

export default Product;