import React from 'react'
import PropTypes from 'prop-types'
import './individualBook.css'

const IndividualBook = ({
	book: {
		title,
        author,
        date,
        year,
        genre,
        difficulty,
        rating,
        ammazonLink,
        comments,
        coverPic
	},
}) => {
  return (
    <div className='card-container m2'>

    <div className='card-banner'>
     <div className="cover-pic">  
    <a href={ammazonLink} target='_blank' rel='noreferrer'><img src={coverPic} className="book-image" alt=""></img></a>
    </div> 

    <div className="title-info p1">
        <span className="t-normal "><span className='bold t-normal'>Title: </span>{title}</span>
        <hr></hr>
        <span className="t-normal"><span className='bold t-normal'>Author: </span>{author}</span>
        <hr></hr>
        <span className="t-normal"><span className='bold t-normal'>Genre: </span>{genre}</span>
        <hr></hr>
        <span className="t-normal"><span className='bold t-normal'>Year: </span>{year}</span>
    </div>
</div>

<div className="ratings">
    <span className='t-medium bold'>Rating: <span className='yellow'>{rating}</span></span>
    
    <span className='t-medium bold mr1'>Difficulty: <span className='yellow'>{difficulty}</span></span>
    </div>

    <div className="comments pt1">
      <p>{comments}</p>
    </div>
 
  </div>
  
  )
}

IndividualBook.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    
    profile: PropTypes.object.isRequired
  }

export default IndividualBook

