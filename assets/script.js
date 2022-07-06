var internationalNewsUrl = 'https://google-news.p.rapidapi.com/v1/topic_headlines?lang=en&country=US&topic=NATION'

var intNewsText = document.getElementById("internationalNews")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '10c804eb9dmsh767850cc77dae2fp1d40cfjsn0a11563a3a53',
		'X-RapidAPI-Host': 'google-news.p.rapidapi.com'
	}
};

function getInternationalNews(internationalNewsUrl) {
    fetch(internationalNewsUrl, options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err))
        intNewsText.textContent = response
}

getInternationalNews(internationalNewsUrl)




// AIzaSyCBtLqLJi2y-KT0N09jB3sgO2YJOw3JR_c APi key for custom google search (hunter)