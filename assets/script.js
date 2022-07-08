var nationalNewsUrl = 'https://api.newscatcherapi.com/v2/search?q=reproductive-rights&lang=en&countries=US&page_size=15'

// vars for newsapi . org
var natNewsHeadline = document.getElementById("nationalNewsHeadline")
var natNewsDescription = document.getElementById("nationalNewsDescription")
var natNewsImage = document.getElementById("nationalNewsImage")
var natNewsLink = document.getElementById("nationalNewsLink")
var natNewsHeadline2 = document.getElementById("nationalNewsHeadline2")
var natNewsDescription2 = document.getElementById("nationalNewsDescription2")
var natNewsImage2 = document.getElementById("nationalNewsImage2")
var natNewsLink2 = document.getElementById("nationalNewsLink2")
var natNewsHeadline3 = document.getElementById("nationalNewsHeadline3")
var natNewsDescription3 = document.getElementById("nationalNewsDescription3")
var natNewsImage3 = document.getElementById("nationalNewsImage3")
var natNewsLink3 = document.getElementById("nationalNewsLink3")
var natNewsHeadline4 = document.getElementById("nationalNewsHeadline4")
var natNewsDescription4 = document.getElementById("nationalNewsDescription4")
var natNewsImage4 = document.getElementById("nationalNewsImage4")
var natNewsLink4 = document.getElementById("nationalNewsLink4")
var natNewsHeadline5 = document.getElementById("nationalNewsHeadline5")
var natNewsDescription5 = document.getElementById("nationalNewsDescription5")
var natNewsImage5 = document.getElementById("nationalNewsImage5")
var natNewsLink5 = document.getElementById("nationalNewsLink5")

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': '-qHy1yp35g0YE9R12kE1fVlqQEQYRNb2ODk2OX1mP_g',
    // 'X-RapidAPI-Host': 'newsapi.org'
  }
};
// fetch for newscatcherapi
function getNationalNews(nationalNewsUrl) {
  fetch(nationalNewsUrl, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      // appending first article
      natNewsHeadline.textContent = response.articles[0].title
      natNewsDescription.textContent = response.articles[0].excerpt
      natNewsImage.src = response.articles[0].media
      natNewsLink.textContent = response.articles[0].link
      // appending 2nd article
      natNewsHeadline2.textContent = response.articles[1].title
      natNewsDescription2.textContent = response.articles[1].excerpt
      natNewsImage2.src = response.articles[1].media
      natNewsLink2.textContent = response.articles[1].link
      // appending 3rd article
      natNewsHeadline3.textContent = response.articles[6].title
      natNewsDescription3.textContent = response.articles[6].excerpt
      natNewsImage3.src = response.articles[6].media
      natNewsLink3.textContent = response.articles[6].link
      // appending 4th article
      natNewsHeadline4.textContent = response.articles[7].title
      natNewsDescription4.textContent = response.articles[7].excerpt
      natNewsImage4.src = response.articles[7].media
      natNewsLink4.textContent = response.articles[7].link
      // appending 5th article
      natNewsHeadline5.textContent = response.articles[12].title
      natNewsDescription5.textContent = response.articles[12].excerpt
      natNewsImage5.src = response.articles[12].media
      natNewsLink5.textContent = response.articles[12].link
    })
    .catch(err => console.error(err))

}

getNationalNews(nationalNewsUrl)

// function to convert state abreviation into state name for display on page
// api reference link: https://rapidapi.com/saikatjahan50/api/states2/
function getStateName(cardNum, stateAbrev) {
  // calls the api that returns an array of state names with key being the abreviation
  var stateToReturn
  var options = {
    method: 'GET',
    headers: {
      Country: 'USA',
      'X-RapidAPI-Key': 'df8820cc33mshf0f6df2756e034fp1ec1bajsna5813e74bc2c',
      'X-RapidAPI-Host': 'states2.p.rapidapi.com'
    }
  };
  // fetch the data
  fetch('https://states2.p.rapidapi.com/query?country=USA', options)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      // assign a variable to the state name at the relevant location
      stateToReturn = data[stateAbrev];
      $(`#stateName${cardNum}`).html(stateToReturn);
    })
    .catch(err => console.error(err));

}

// variables for state news API
// legiscan user manual: https://legiscan.com/gaits/documentation/legiscan
var stateNewsURL = 'https://api.legiscan.com/?key=9bf6fb64823ce819fdf2cf635e983ccd&op=getSearch&&query=abortion+OR+(pregnancy+NEAR+termination)';

// function to call legiscan api and handle through JSON
function getStateNews(stateNewsURL) {
  fetch(stateNewsURL).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    // data has now ben handled into an object, now to display to cards
    // for loop assigns content to cards, looping through 3 times to reduce repetitive hardcoding
    for (var i = 0; i < 3; i++) {
      // variables for page display are pulled from api data
      var BillState = data.searchresult[i].state;
      var BillNumber = data.searchresult[i].bill_number;
      var Billtitle = data.searchresult[i].title;
      var BillURL = data.searchresult[i].url;
      var BillStatus = data.searchresult[i].last_action;
      var BillLastAction = data.searchresult[i].last_action_date;

      // ensure index of for loop aligns with page display numbers
      var H = i + 1;
      // set text of bill title with state and id
      $(`#stateTitle${H}`).html(`${BillState} ${BillNumber}`);
      // set text of bill content
      $(`#stateText${H}`).html(`Per author of bill, handles: ${Billtitle}`);
      // set link to bill information page
      $(`#stateLink${H}`).html(`<a href="${BillURL}" target="_blank">Bill Information Page</a>`);
      // set text of current bill status
      $(`#stateStatus${H}`).html(`As of ${BillLastAction}, the bill's status is: ${BillStatus}`);

      // inserts the name of the state into the title area of the card
      stateFullName = getStateName(H, BillState);
    }
  })
    .catch(err => console.error(err));
}

// function call for state news cards
getStateNews(stateNewsURL);



// local storage of email input
var emailBtn = document.getElementById('emailBtn')

function emailStore() {
  var emailFoo = document.getElementById('inputEmail')
  localStorage.setItem('email', emailFoo.value)
  var key = localStorage.key(emailFoo.value)
  var newEmail = localStorage.getItem(key)
  console.log(newEmail)
}
// event listener for email storage
emailBtn.addEventListener('click', emailStore)