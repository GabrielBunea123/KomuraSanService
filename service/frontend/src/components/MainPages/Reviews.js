import React,{useState,useEffect} from 'react'
import Sidebar from "./Sidebar"
import {Grid,Button,Collapse} from "@material-ui/core"
import {Alert} from "@mui/lab"
import Footer from './Footer'
import ReviewsContainer from '../comps/ReviewsContainer'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const Reviews = () => {

    const [reviews,setReviews] = useState([])
    const [reviewsAverage,setReviewsAverage]= useState(0)

    const [reviewsPercentage5,setReviewsPercentage5]= useState(0)
    const [reviewsPercentage4,setReviewsPercentage4]= useState(0)
    const [reviewsPercentage3,setReviewsPercentage3]= useState(0)
    const [reviewsPercentage2,setReviewsPercentage2]= useState(0)
    const [reviewsPercentage1,setReviewsPercentage1]= useState(0)


    const [addReviewName,setAddReviewName] = useState("")
    const [addReviewText,setAddReviewText] = useState("")
    const [addReviewRating,setAddReviewRating] = useState(2)

    const [successMsg,setSuccessMsg] = useState('')
    const [errorMsg,setErrorMsg]=useState('')


    function getReviews(){
        var fiveStars=0
        var fourStars=0
        var threeStars=0
        var twoStars=0
        var oneStars=0

        fetch("/api/get-reviews")
        .then((res)=>res.json())
        .then((data)=>{
            setReviews(data)
            data.map((item)=>{
                setReviewsAverage(avg=>avg+item.star_rating)
                if(item.star_rating==1){
                    oneStars++
                }
                else if(item.star_rating==2){
                    twoStars++
                }
                else if(item.star_rating==3){
                    threeStars++
                }
                else if(item.star_rating==4){
                    fourStars++
                }
                else{
                    fiveStars++
                }
            })
            setReviewsAverage(avg=>(Math.round((avg/data.length) * 100) / 100).toFixed(2))
            setReviewsPercentage1((Math.round((oneStars/data.length*100) * 100) / 100).toFixed(2))
            setReviewsPercentage2((Math.round((twoStars/data.length*100) * 100) / 100).toFixed(2))
            setReviewsPercentage3((Math.round((threeStars/data.length*100) * 100) / 100).toFixed(2))
            setReviewsPercentage4((Math.round((fourStars/data.length*100) * 100) / 100).toFixed(2))
            setReviewsPercentage5((Math.round((fiveStars/data.length*100) * 100) / 100).toFixed(2))
        })
    }

    function addReview(){
        const requestOptions={
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                name:addReviewName,
                text:addReviewText,
                star_rating:addReviewRating
            })
        }
        fetch("/api/add-review",requestOptions)
        .then((res)=>{
            if(res.ok){
                setSuccessMsg("Review-ul tau a fost adaugat. Multumim !")
                getReviews()
            }
            else{
                setErrorMsg("S-a ivit o eroare. Reincercati !")
            }
        })
        .then((data)=>null)
    }

    function handleNameChange(event){
        setAddReviewName(event.target.value)
    }
    function handleTextChange(event){
        setAddReviewText(event.target.value)
    }
    function handleRatingChange(event){
        setAddReviewRating(event.target.value)
    }

    useEffect(()=>{
        getReviews()
    },[])

    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                <Grid item xs = {12} align="center">
                    <Collapse in={errorMsg !="" || successMsg!=""}>
                        {successMsg !="" ?(<Alert severity="success">{successMsg}</Alert>):(<Alert severity="error">{errorMsg}</Alert>)}
                    </Collapse>

                </Grid>
                <div className="d-flex justify-content-start flex-column flex-sm-row">
                    <h3 className="p-2">Media receneziilor</h3>
                    <div className="mr-auto add-review p-2">
                        <Button variant="contained" style={{backgroundColor:"#a72920",color:"white"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Adauga review</Button>
                        {/* MODAL */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Review</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label class="col-form-label">Nume</label>
                                            <input onChange={handleNameChange} placeHolder="Numele complet" type="text" class="form-control"></input>
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Mesaj</label>
                                            <textarea onChange={handleTextChange} placeHolder="Cum a fost experienta dumneavoastra?" class="form-control" id="message-text"></textarea>
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Star rating</label>
                                            <Stack>
                                                <Rating onChange={handleRatingChange} name="size-medium" defaultValue={2} />
                                            </Stack>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={addReview} type="button" class="btn btn-primary">Posteaza</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* MODAL END */}
                    </div>
                </div>

                <div className="average-review-container">
                    <div className="d-flex flex-column">
                        <Rating name="size-large" className="p-2" readOnly precision={0.1} value={reviewsAverage} />
                        <h5 className="p-2">{reviewsAverage} out of 5 stars</h5>
                    </div>
                    <div style={{paddingLeft:10}}>
                        <h5 className="p2">5 stars</h5>
                        <div className="d-flex">
                            <div class="progress" style={{marginTop:7,marginRight:5}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${reviewsPercentage5}%`}} aria-valuenow={`${reviewsPercentage5}`} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{marginTop:3}} className="p2">{reviewsPercentage5} %</p>
                        </div>

                        <h5 className="p2">4 stars</h5>
                        <div className="d-flex">
                            <div class="progress" style={{marginTop:7,marginRight:5}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${reviewsPercentage4}%`}} aria-valuenow={`${reviewsPercentage4}`} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{marginTop:3}} className="p2">{reviewsPercentage4} %</p>
                        </div>

                        <h5 className="p2">3 stars</h5>
                        <div className="d-flex">
                            <div class="progress" style={{marginTop:7,marginRight:5}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${reviewsPercentage3}%`}} aria-valuenow={`${reviewsPercentage3}`} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{marginTop:3}} className="p2">{reviewsPercentage3} %</p>
                        </div>

                        <h5 className="p2">2 stars</h5>
                        <div className="d-flex">
                            <div class="progress" style={{marginTop:7,marginRight:5}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${reviewsPercentage2}%`}} aria-valuenow={`${reviewsPercentage2}`} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{marginTop:3}} className="p2">{reviewsPercentage2} %</p>
                        </div>

                        <h5 className="p2">1 star</h5>
                        <div className="d-flex">
                            <div class="progress" style={{marginTop:7,marginRight:5}}>
                                <div class="progress-bar bg-warning" role="progressbar" style={{width:`${reviewsPercentage1}%`}} aria-valuenow={`${reviewsPercentage1}`} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <p style={{marginTop:3}} className="p2">{reviewsPercentage1} %</p>
                        </div>
                    </div>
                </div>

                <h3 style={{marginTop:60,padding:10,fontWeight:"bold"}}>Toate review-urile</h3>


                <ReviewsContainer/>
            </div>
            <Footer/>
        </Grid>
    )
}

export default Reviews