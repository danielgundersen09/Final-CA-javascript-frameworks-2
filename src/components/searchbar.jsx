import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Searchbar extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <form className="relative">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search by name..."
            />
            <button id="searchButton">
              Search <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

document.getElementById("searchButton").addEventListener("click", search);

document.getElementById("searchButton").parentElement.onsubmit = function() {
  return false;
};

function search() {
  fetch("https://api.magicthegathering.io/v1/cards")
    .then(result => result.json())
    .then(data => {
      var cardsDiv1 = document.getElementById("cards");
      console.log("Empty cards");

      cardsDiv1.innerHTML = "";

      var searchValue1 = document.getElementById("search").value;

      var regexValue1 = RegExp(searchValue1, "i");
      console.log(regexValue1);

      var newData1 = {
        cards: []
      };

      for (var i = 0; i < data.cards.length; i++) {
        if (regexValue1.test(data.cards[i].name)) {
          newData1.cards.push(data.cards[i]);
        }
      }
      indexFunction(newData1);
    })
    .catch(err => console.log(err));
}

export default Searchbar;
