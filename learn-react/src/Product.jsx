import './Product.css';
import Price from './Price.jsx';


function Product({title}) {
    let oldPrices=['499','899','599','299']
    let newPrices=['399','799','499','199']
    return (
        <div className='Product'>
            <h3>{title}</h3>
            <p>Description</p>
            <Price oldPrice='123' newPrice='234' />
        </div>
    )
}

export default Product;