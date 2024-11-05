// import './index.css';
import IdolCard from "./idolCard";
import { useState } from "react";
import idolImage from "../utils/idol.jpg"; 
const Body = () => {
  const [likeCount, setLikeCount] = useState(16);
  const [liked, setLiked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }

    // setLikeCount(likeCount + 1);
  };
  const [shareCount, setShareCount] = useState(7);
  const handleShareClick = () => {
    setShareCount(shareCount + 1);
  };
  const [viewCount, setViewCount] = useState(20);
  const handleViewCount = () => {
    setViewCount(viewCount + 1);
  };
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  return (
    <div className="container">
      <div className={`leftSidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="headerContainer">
          <button className="roundBtn1">＞</button>

          <button className="squareBtn" style ={{left: isSidebarOpen ? "22%":"1%"}} onClick={handleSidebarToggle}>
          {isSidebarOpen ? "≪" : "≫"} 
          </button>

          <p className="heading">
            MAITREYA BUDDHA IN GESTURE OF FERALESSNESS(ABHAYA MUDHRA)
          </p>
        </div>

        <div className="buttons">
          <div className="like-Btn" onClick={handleLikeClick}>
            <button className="roundBtn2"> {liked ? "❤️" : "♡"}</button>

            <p>{likeCount}</p>
          </div>
          <div className="share-Btn" onClick={handleShareClick}>
            <button className="roundBtn2"></button>
            <p>{shareCount}</p>
          </div>
          <div className="view-Btn">
            <button className="roundBtn2" onClick={handleViewCount}>
              👁
            </button>
            <p>{viewCount}</p>
          </div>
        </div>
        <div className="idolCard">{<IdolCard />}</div>
      </div>
      <div className="rightSidebar">
        
          <img alt="" src={idolImage} className="overlay-image" style={{left: isSidebarOpen ? "55%" : "45%"  }}></img>
        
      </div>
    </div>
  );
};
export default Body;
