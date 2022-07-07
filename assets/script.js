var nationalNewsUrl = 'https://newsapi.org/v2/everything?q=reproductive-rights&sortBy=popularity&pageSize=10&apiKey=71e1603193854be49b0cc7391526fa4f'


// testinggggggggggg
// vars for newsapi . org
var natNewsHeadline = document.getElementById("nationalNewsHeadline")
var natNewsDescription = document.getElementById("nationalNewsDescription")
var natNewsImage = document.getElementById("nationalNewsImage")
// var a = document.createElement('a')
// var linkToNationalFeatureNews = document.createTextNode("Click here for more")
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
		'X-Api-Key': '71e1603193854be49b0cc7391526fa4f',
		// 'X-RapidAPI-Host': 'newsapi.org'
	}
};

function getNationalNews(nationalNewsUrl) {
	fetch(nationalNewsUrl, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
      // appending first article
			natNewsHeadline.textContent = response.articles[0].title
			natNewsDescription.textContent = response.articles[0].description
			// you had the img set to .TextContent but you needed to target the img src :)
			natNewsImage.src = response.articles[0].urlToImage
			// a.appendChild(linkToNationalFeatureNews)
			// a.title = 'Click for more'
			// a.href = response.articles[0].url
			var natURL = response.articles[0].url
			$('#natNewsHeadline').html('<a href="${natURL}" target="_blank"></a>')
      natNewsLink.textContent = response.articles[0].url
      // appending 2nd article
			natNewsHeadline2.textContent = response.articles[1].title
			natNewsDescription2.textContent = response.articles[1].description
			natNewsImage2.src = response.articles[1].urlToImage
      natNewsLink2.textContent = response.articles[1].url
      // appending 3rd article
			natNewsHeadline3.textContent = response.articles[2].title
			natNewsDescription3.textContent = response.articles[2].description
			natNewsImage3.src = response.articles[2].urlToImage
      natNewsLink3.textContent = response.articles[2].url
      // appending 4th article
			natNewsHeadline4.textContent = response.articles[3].title
			natNewsDescription4.textContent = response.articles[3].description
			natNewsImage4.src = response.articles[3].urlToImage
      natNewsLink4.textContent = response.articles[3].url
      // appending 5th article
			natNewsHeadline5.textContent = response.articles[5].title
			natNewsDescription5.textContent = response.articles[5].description
			natNewsImage5.src = response.articles[5].urlToImage
      natNewsLink5.textContent = response.articles[5].url
		})
		.catch(err => console.error(err))

}

getNationalNews(nationalNewsUrl)

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
		}
	})
}

// function call for state news cards
getStateNews(stateNewsURL);

// 9bf6fb64823ce819fdf2cf635e983ccd API key for LegiScan

// AIzaSyCBtLqLJi2y-KT0N09jB3sgO2YJOw3JR_c APi key for custom google search (hunter)