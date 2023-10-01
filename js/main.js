function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Update the placeholders with random numbers and percentages
document.addEventListener("DOMContentLoaded", function () {
    const onlinePlayersElement = document.getElementById("online-players");
    const hordePlayersElement = document.getElementById("horde-players");
    const hordePercentageElement = document.getElementById("horde-percentage");
    const alliancePlayersElement = document.getElementById("alliance-players");
    const alliancePercentageElement = document.getElementById("alliance-percentage");

    const randomOnlinePlayers = getRandomNumber(100, 1000); // Adjust the range as needed
    const randomHordePlayers = getRandomNumber(0, randomOnlinePlayers); // Adjust the range based on total online players
    const randomAlliancePlayers = randomOnlinePlayers - randomHordePlayers;

    onlinePlayersElement.textContent = randomOnlinePlayers;
    hordePlayersElement.textContent = randomHordePlayers;
    alliancePlayersElement.textContent = randomAlliancePlayers;

    // Calculate percentages
    const hordePercentage = ((randomHordePlayers / randomOnlinePlayers) * 100).toFixed(2);
    const alliancePercentage = ((randomAlliancePlayers / randomOnlinePlayers) * 100).toFixed(2);

    hordePercentageElement.textContent = hordePercentage + "%";
    alliancePercentageElement.textContent = alliancePercentage + "%";
});

// Function to generate random news text
function generateRandomNewsText() {
    const newsTexts = [
        "Players are reporting issues with server stability.",
        "Upcoming server maintenance scheduled for next week.",
        "Exciting new features are in development for Cataclysm.",
        "Join our community events and earn rewards!",
        "Recent bug fixes have improved gameplay experience.",
        "We value player feedback and welcome your suggestions."
    ];

    return newsTexts[Math.floor(Math.random() * newsTexts.length)];
}

// Update news item text with random content
document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach(function (item) {
        const newsText = generateRandomNewsText();
        item.querySelector("p").textContent = newsText;
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const newsSection = document.getElementById('news');
    const newsItems = Array.from(newsSection.getElementsByClassName('news-item'));

    // Shuffle the news items randomly
    shuffleArray(newsItems);

    // Append the shuffled items back to the news section
    for (const item of newsItems) {
        newsSection.appendChild(item);
    }
});





