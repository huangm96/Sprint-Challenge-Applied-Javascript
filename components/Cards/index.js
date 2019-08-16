// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const body = document.querySelector("body");
console.log(body);
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  
.then(function (response) {
    
    console.log(response);
    const taps = document.querySelectorAll(".tab");

    taps[0].addEventListener("click",()=>{
        
        placeArticle(response.data.articles.javascript)
        placeArticle(response.data.articles.bootstrap)
        placeArticle(response.data.articles.technology)
        placeArticle(response.data.articles.jquery)
        placeArticle(response.data.articles.node)
      })
    
    
  })

  .catch(function (error) {
    
    console.log(error);
  }) 

  function placeArticle(place){
    const article = place;
    article.forEach((a)=>{
        document.querySelector(".cards-container").appendChild(createArticleCard(a));
    })
}
  function createArticleCard(data){
    
    const card = document.createElement("div");
    const headline =document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const image = document.createElement("img");
    const authorsName = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    image.setAttribute("src", data.authorPhoto);

    headline.textContent=data.headline;
    authorsName.textContent=data.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorsName);
    imgContainer.appendChild(image);

    

    return card;

  }