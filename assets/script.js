var internationalNewsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=71e1603193854be49b0cc7391526fa4f'

var intNewsText = document.getElementById("internationalNews")

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': '71e1603193854be49b0cc7391526fa4f',
		// 'X-RapidAPI-Host': 'newsapi.org'
	}
};

function getInternationalNews(internationalNewsUrl) {
    fetch(internationalNewsUrl, options)
	    .then(response => response.json())
	    .then(response => {
			console.log(response)
			intNewsText.textContent = response.ok // loop through 
		})
	    .catch(err => console.error(err))
        
}

getInternationalNews(internationalNewsUrl)




// AIzaSyCBtLqLJi2y-KT0N09jB3sgO2YJOw3JR_c APi key for custom google search (hunter)