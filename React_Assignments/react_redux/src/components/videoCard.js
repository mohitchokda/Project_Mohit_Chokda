import React, { useState, useEffect } from 'react';
import cardImage from '../utils/images/Bhediya_film_poster.jpg';
import playButton from '../utils/images/play-button.png';
import likeButton from '../utils/images/imgLike.png';
import DislikeButton from '../utils/images/dislikeImg.png';
import drop from '../utils/images/caret_Img.png';
import {setLikeCount, toggleDescription} from '../redux/appSlice';
import { useDispatch, useSelector } from 'react-redux';


const VideoCard = () => {

//Make connection to Element
const isDescriptionVisible = useSelector((store) => store.app.isDescriptionVisible);
const likeCount = useSelector((store) => store.app.likeCount);

const dispatch = useDispatch();

//Dispatch functions
const toggleDescriptionHandler = () => {
  dispatch(toggleDescription()); // Dispatch action to toggle description visibility
};

const handleLikeClick = () => {
  dispatch(setLikeCount());
};


  //const [likeCount, setLikeCount] = useState(0);
 
  useEffect(() => {
    // Monitor changes in likeCount if needed
    // console.log('Like count changed:', likeCount);
  }, [likeCount]);


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4 relative">
      {/* Video Thumbnail */}
      <img
        className="w-full h-40 object-cover object-center"
        src={cardImage}
        alt="Video Thumbnail"
      />
     
      {/* Video Information */}
      <div className="px-4 py-2 relative">
        <div className='flex justify-between'>
          <div className="font-bold text-xl mb-2 text-white">
            <button><img className='w-12' src={playButton} alt="Play Button" /></button>
            <button onClick={handleLikeClick}>
              <img className='w-7 mr-2 mb-4' src={likeButton} alt="Like Button" />
            </button>
            <button><img className='w-7 mb-4' src={DislikeButton} alt="Dislike Button" /></button>
          </div>
          <button
            onMouseEnter={toggleDescriptionHandler}
            onMouseLeave={toggleDescriptionHandler}
            onFocus={toggleDescriptionHandler}
            onBlur={toggleDescriptionHandler}
            onClick={toggleDescriptionHandler}

        >
            <img className='w-5 mb-4' src={drop} alt="Drop Button" />
            {/* Floating Description */}

            {isDescriptionVisible ? (
          <div className="absolute bg-gray-700 text-white p-1 rounded-lg shadow-md top-8 left-6 z-10 text-sm">
            {/* Description content goes here */}
            <p>Bhediya is the Movie starring Varun Dhawan and Kriti Sanon Moddok Productions</p>
          </div>
        ) : null}
          </button>
        </div>
        <p className="text-gray-300">{likeCount} likes</p>
        <div className='flex'>
          <p className="mr-2 text-green-500">97% Match</p>
          <p className="text-gray-300 text-base">2h 35m</p>
        </div>
        <div>
          <ol className='flex'>
            <li className="text-gray-300 text-base mr-2">Horror</li>
            <li className="text-gray-300 text-base mr-2">Adventure</li>
            <li className="text-gray-300 text-base">Mystery</li>
          </ol>
        </div>
      </div>
    </div>
  );
};


export default VideoCard;
