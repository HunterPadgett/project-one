var nationalNewsUrl = 'https://newsapi.org/v2/everything?q=reproductive-rights&from=2022-07-05&sortBy=popularity&pageSize=5&apiKey=71e1603193854be49b0cc7391526fa4f'

var natNewsHeadline = document.getElementById("nationalNewsHeadline")
var natNewsDescription = document.getElementById("nationalNewsDescription")
var natNewsImage = document.getElementById("nationalNewsImage")

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': '71e1603193854be49b0cc7391526fa4f',
		// 'X-RapidAPI-Host': 'newsapi.org'
	}
};

function getInternationalNews(nationalNewsUrl) {
    fetch(nationalNewsUrl, options)
	    .then(response => response.json())
	    .then(response => {
			console.log(response)
			natNewsHeadline.textContent = response.articles[0].title 
			natNewsDescription.textContent = response.articles[0].description
      // you had the img set to .TextContent but you needed to target the img src :)
			natNewsImage.src = response.articles[0].urlToImage
		})
	    .catch(err => console.error(err))
        
}

getInternationalNews(nationalNewsUrl)

// variables for state news API
// legiscan user manual: https://legiscan.com/gaits/documentation/legiscan
var stateNewsURL = 'https://api.legiscan.com/?key=9bf6fb64823ce819fdf2cf635e983ccd&op=getSearch&&query=abortion+OR+(pregnancy+NEAR+termination)';

// function to call legiscan api and handle through JSON
function getStateNews(stateNewsURL) {
	fetch(stateNewsURL).then(function(response) {
		return response.json();
	}).then(function (data) {
		console.log(data);
		// data has now ben handled into an object, now to display to cards
		var firstBillState = data.searchresult[0].state;
		var firstBillNumber = data.searchresult[0].bill_number;
		var firstBillURL = data.searchresult[0].url;
		var firstBillStatus = data.searchresult[0].last_action;
		var firstBillLastAction = data.searchresult[0].last_action_date;
		
	})
}

getStateNews(stateNewsURL);

// 9bf6fb64823ce819fdf2cf635e983ccd API key for LegiScan

// AIzaSyCBtLqLJi2y-KT0N09jB3sgO2YJOw3JR_c APi key for custom google search (hunter)