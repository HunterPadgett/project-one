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




// AIzaSyCBtLqLJi2y-KT0N09jB3sgO2YJOw3JR_c APi key for custom google search (hunter)