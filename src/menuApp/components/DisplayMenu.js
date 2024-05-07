import React,{useState} from "react";
import MenuItem from "./MenuItem";

const MAX_ITEMS_TO_SHOW = 4; // Number of items to display initially

function DisplayMenu({ articles,handleClickArticle }) {
  const [displayedItems, setDisplayedItems] = useState(articles.slice(0, MAX_ITEMS_TO_SHOW));


  const handleShowMore = () => {
    const newDisplayedItems = displayedItems.concat(
      articles.slice(displayedItems.length, displayedItems.length + MAX_ITEMS_TO_SHOW)
    );
    setDisplayedItems(newDisplayedItems);

  };


  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const currentScrollY = window.scrollY;

    if((displayedItems.length < articles.length)){
      if (windowHeight + currentScrollY >= documentHeight ) {

        console.log("displayedItems.length",displayedItems.length)
        console.log("articles.length",articles.length)
  
        handleShowMore();
        console.log("load more --------------------->")
        console.log("PAS ENCORE tout chargé")
      }
    }else{
      console.log("J'ai tout chargé")
    }
  

  };
  
  window.addEventListener('scroll', handleScroll);


  return (
    <div className="menu_list">
      {displayedItems.map((article, index) => (
        <MenuItem
          handleClickArticle= {handleClickArticle} 
          key={index + 1}
          id={article.ARTICLE_ID}
          categoryId={article.ARTICLE_CATEGORY}
          nom={article.ARTICLE_NAME}
          descr={article.ARTICLE_DESCRIPTION}
          price={article.ARTICLE_PRICE}
          image={article.ARTICLE_IMG_1}
          time={article.ARTICLE_PREPARE_TIME}
          views={Number(article.ARTICLE_VIEW)}
          devise="FCFA"
        />
      ))}
      {/* {articles.length > displayedItems.length && ( // Check if there are more elements
        <div className="center_container">
          <div className="btn" onClick={handleShowMore}>
            <span className="text">Voir + </span>
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.45 5.59375L8.37505 9.66875C7.8938 10.15 7.1063 10.15 6.62505 9.66875L2.55005 5.59375"
                stroke="#FF6B01"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default DisplayMenu;