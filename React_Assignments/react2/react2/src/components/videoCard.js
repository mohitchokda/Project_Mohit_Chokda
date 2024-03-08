import React from 'react';
import { useState,useEffect } from 'react';
import cardImage from '../utils/images/Bhediya_film_poster.jpg';
import playButton from '../utils/images/play-button.png';
import likeButton from '../utils/images/imgLike.png';
import dislikeButton from '../utils/images/dislikeImg.png';
import caretBtn from '../utils/images/caret_Img.png';

const VideoCard = () => {

  const [likeCount, setLikeCount] = useState(0);
  const [isCaretClicked,setIsCaretClicked] = useState(false);

  // Function to handle the Caret Click event
  const caretClicked = () =>{
    setIsCaretClicked(!isCaretClicked);
    //console.log(isCaretClicked + 'clicked');
  }


  // useEffect to monitor changes in likeCount
  useEffect(() => {
    // You can perform actions here when likeCount changes, if needed
    // console.log('Like count changed:', likeCount);
  }, [likeCount]);


  const handleLikeClick = () => {
    // Increment likeCount by 1 when the like button is clicked
    setLikeCount(likeCount + 1);
  };


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
      {/* Video Thumbnail */}
      <img
        className="w-full h-40 object-cover object-center"
        src={cardImage}
        alt="Video Thumbnail"
      />
     
      {/* Video Information */}
      <div className="px-4 py-2">
        <div className='flex '>
          <div className="font-bold text-xl mb-2 text-white">
            <button><img className='w-12' src={playButton} alt="Play Button" /></button>
          </div>
          <button onClick={handleLikeClick}>
            <img className='w-7 mr-2 mb-4' src={likeButton} alt="Like Button" />
          </button>
          <button><img className='w-7 mb-4' src={dislikeButton} alt="Dislike Button" /></button>
          <button onClick={caretClicked}>
            <img className='w-7 mb-4 ml-20' src={caretBtn} alt="Caret Button" />
          </button>          
        </div>
        {/*If Else in REACT */}
        {isCaretClicked 
        ? ( <div className='bg-slate-700 rounded absolute w-60 text-wrap' >
              <p className='text-white text-wrap'>Bhediya is the Movie starring Varun Dhawan and Kriti Sanon Moddok Productions</p>
            </div>)
        :(
            <div className='bg-slate-700 rounded hidden'>
            </div>
          )
        }
        <p className="text-gray-300">{likeCount} likes</p>
        <div className='flex'>
          <p className=" mr-2 text-green-500">97% Match</p>
          <p className="text-gray-300 text-base">2h 35m</p>
        </div>
        <div>
          <ol className='flex'>
            <li className="text-gray-300 text-base mr-2">Horror</li>
            <li className="text-gray-300 text-base mr-2">Adventure</li>
            <li className="text-gray-300 text-base">Mystery</li>
          </ol>
        </div>
        {/* Display the like count */}
      </div>
    </div>
  );
};


export default VideoCard;