import React from 'react'

const CardServicii = (props) => {
    return (
        <div style={{marginTop:30}} class="card-servicii-container shadow bg-white rounded">
            <a href={`/servicii-details/${props.id}`} style={{textDecoration: 'none',color:'black'}}>
                <img src={props.image} class="card-img-top-servicii card-img-top" alt="..."></img>
                <div style={{paddingTop:20}} class="card-body">
                    <h5 style={{color:"#a72920",fontWeight:"bold"}} class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description.slice(0,60)}</p>
                </div>
            </a>
        </div>
    )
}

export default CardServicii
