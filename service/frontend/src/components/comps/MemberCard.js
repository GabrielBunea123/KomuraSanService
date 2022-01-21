import React from 'react'

const MemberCard = () => {
    return (
        <div className="member-card-container">
            <img src="/static/images/home/download.png" className="member-img"></img>
            <h3>Nume membru</h3>
            <h5>Pozitie membru</h5>
            <div className="descriere-membru">
                " Some quick example text to build on the card title and make up the bulk of the card's content. "
            </div>
        </div>
    )
}

export default MemberCard
