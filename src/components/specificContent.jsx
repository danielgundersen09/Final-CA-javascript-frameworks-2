class SpecificContent extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3" id="cardImage">
            <img width="100%" />
          </div>
          <div className="col-sm-9" id="cardDetails">
            <div className="row">
              <div className="col-sm-3" id="cardImage"></div>
              <div className="col-sm-9" id="cardDetails"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}

var id = getQueryStringValue("id");

if (id === "") {
  var cardInfo1 = document.getElementById("cardDetails");
  cardInfo1.children[0].innerHTML =
    "Can not find a specific card. Try selecting your card again.";
} else {
  (function() {
    fetch("https://api.magicthegathering.io/v1/cards/" + id)
      .then(result => result.json())
      .then(data => {
        var cardInfo1 = document.getElementById("cardDetails");
        var cardImg1 = document.getElementById("cardImage");

        cardImg1.children[0].src = data.card.imageUrl;
        cardInfo1.children[0].innerHTML = data.card.name;
        cardInfo1.children[1].innerHTML = "<b>About:  </b>" + data.card.text;
        cardInfo1.children[2].innerHTML = "<b>Rarity: </b>" + data.card.rarity;
        cardInfo1.children[3].innerHTML =
          "<b>Color: </b>" + data.card.colors[0];
        if (data.card.colors.length >= 2) {
          for (var i = 1; i < data.card.colors.length; i++) {
            cardInfo1.children[3].innerHTML += ", " + data.card.colors[i];
          }
        }
      })
      .catch(err => console.log(err));
  })();
}

export default SpecificContent;
