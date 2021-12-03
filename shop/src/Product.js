import { Link } from 'react-dom'
import { useHistory } from 'react-router'


function Product(props) {
    const id = props.shoes.id
    let history = useHistory()
    return (
        <div className="col-md-4" style={{cursor:"pointer"}} onClick={()=>{
            history.push("/detail/" + id)
        }}>
            <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} width="100%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </div>
    )
}

export default Product;