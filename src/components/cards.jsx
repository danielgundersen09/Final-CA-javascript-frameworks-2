import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div id="cards"></div>
        </div>
      </div>
    );
  }
}

fetch("https://api.magicthegathering.io/v1/cards")
  .then(result => result.json())
  .then(data => {
    indexFunction(data);
  })
  .catch(err => console.log(err));

function indexFunction(data) {
  var cardsDiv1 = document.getElementById("cards");

  if (data.cards.length === 0) {
    var errorElement1 = document.createElement("p");
    errorElement1.innerHTML = "No results were found";
    errorElement1.style.color = "red";
    cardsDiv1.appendChild(errorElement1);
  }

  for (var i = 0; i < data.cards.length; i++) {
    var divColSm4 = document.createElement("div");
    divColSm4.className = "col-sm-4";

    var divContainer1 = document.createElement("div");
    divContainer1.className = "card-container";

    var cardName1 = document.createElement("h4");
    cardName1.innerHTML = data.cards[i].name;

    var cardImg1 = document.createElement("img");
    cardImg1.src = data.cards[i].imageUrl;
    cardImg1.style.width = "100%";

    var cardA1 = document.createElement("a");
    cardA1.href = "card-specific.html?id=" + data.cards[i].id;
    cardA1.className = "btn btn-success";
    cardA1.innerHTML = "View More";

    divContainer1.appendChild(cardName1);

    divContainer1.appendChild(cardImg1);

    divContainer1.appendChild(cardA1);

    cardsDiv1.appendChild(divColSm4);

    divColSm4.appendChild(divContainer1);
  }
}

export default Card;
