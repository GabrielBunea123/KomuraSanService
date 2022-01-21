import React,{useEffect,useState} from 'react'
import ReviewCard from './ReviewCard'

const ReviewsContainer = (props) => {

    const [reviews,setReviews] = useState([])

    function getReviews(){
        fetch("/api/get-reviews")
        .then((res)=>res.json())
        .then((data)=>{
            setReviews(data)
        })
    }

    useEffect(()=>{
        getReviews()
    },[])

    return (
        <div>
            <div class="d-flex justify-content-center flex-wrap">
                {reviews.length>0?reviews.map((item)=>(
                    <ReviewCard id={item.id} name={item.name} text={item.text} ratingValue={item.star_rating}/>
                )):null}
            </div>
        </div>
    )
}

export default ReviewsContainer
