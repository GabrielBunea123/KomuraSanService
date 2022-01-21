import React from 'react'

const RecommendedProducts = (props) => {
    return (
        <div class="card card-recommended-products-container shadow bg-white rounded">
            <a href={`/product-details/${props.id}`} style={{textDecoration: 'none',color:'black'}}>
                <img src={props.image} class="card-img-top-magazin" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description.slice(0,30)}</p>
                    {/* <Rating name="half-rating-read" defaultValue={props.rating} precision={1} readOnly /> */}
                    <h5 class="price-magazin">150 RON</h5>
                </div>
            </a>
        </div>
    )
}

export default RecommendedProducts
