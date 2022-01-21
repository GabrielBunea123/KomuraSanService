import React,{useState} from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ReviewCard = (props) => {
    var colorsArray=['#a72920','#383e42','#798fab','#7edfe6']

    const [name,setName] = useState("")
    const [text,setText] = useState("")
    const [starRating,setStarRating]=useState(0)

    function getOneReview(){
        const requestOptions={
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                review_id:props.id
            })
        }
        fetch("/api/get-one-review",requestOptions)
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem("review_name",data.name)
            localStorage.setItem("review_text",data.text)
            localStorage.setItem("review_rating",data.star_rating)
        })
    }

    return (
        <div class="card card-reviews-container shadow bg-white rounded">
            <div style={{backgroundColor:colorsArray[Math.floor(Math.random() * colorsArray.length)]}} className="reviews-card-top-color"></div>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.text.length>60?props.text.slice(0,60):props.text} {props.text.length>60?<button onClick={getOneReview} className="btn" data-bs-toggle="modal" data-bs-target="#recenzie">vezi mai mult</button>:null}</p>
                {/* MODAL */}
                <div class="modal fade" id="recenzie" tabindex="-1" aria-labelledby="recenzie" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{localStorage.getItem("review_name")}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <p>{localStorage.getItem("review_text")}</p>
                                    </div>
                                    <div class="mb-3">
                                        <label for="message-text" class="col-form-label">Star rating</label><br></br>
                                        <Rating readOnly name="size-medium" value={localStorage.getItem("review_rating")} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Rating name="half-rating-read" value={props.ratingValue} precision={1} readOnly />
            </div>
        </div>
    )
}

export default ReviewCard
