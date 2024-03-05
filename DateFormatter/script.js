

async function getTime() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'XXXXXXXXX'; // Replace with your Google API key
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(city)}&key=${apiKey}`);
    const data = await response.json();

    if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        const lat = location.lat;
        const lng = location.lng;

        const timeZoneResponse = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`);
        const timeZoneData = await timeZoneResponse.json();
        const timeZone = timeZoneData.timeZoneId;

        const day = new Date().toLocaleString('en-US', { timeZone: timeZone, day: 'numeric' });
        const month = new Date().toLocaleString('en-US', { timeZone: timeZone, month: 'numeric' });
        const year = new Date().toLocaleString('en-US', { timeZone: timeZone, year: 'numeric' });
        const hours = new Date().toLocaleString('en-US', { timeZone: timeZone, hour: 'numeric', hour12: false });
        const minutes = new Date().toLocaleString('en-US', { timeZone: timeZone, minute: 'numeric' });


        let currentTime;

        // const currentTime = new date.toLocaleString('en-US', { timeZone: timeZone });
        const dateOptionsSelectElement = document.getElementById("date-options");
        if (dateOptionsSelectElement.value == "dd-mm-yyyy") {
            const formattedDate = `${day}-${month}-${year}`;
            currentTime = `${formattedDate} ${hours}:${minutes}`;
            console.log(currentTime);
        }
        else if (dateOptionsSelectElement.value == "yyyy-mm-dd") {
            const formattedDate = `${year}-${month}-${day}`;
            currentTime = `${formattedDate} ${hours}:${minutes}`;
            console.log(currentTime);

        }
        else if (dateOptionsSelectElement.value == "mm-dd-yyyy-h-mm") {
            const formattedDate = `${month}-${day}-${year}`;
            currentTime = `${formattedDate}-${hours} Hours ${minutes} Minutes`;
            console.log(currentTime);
        }


        const currentDateResult = document.getElementById("current-date");

        currentDateResult.textContent = `Current time in ${city}: ${currentTime} `;
    } else {
        currentDateResult.textContent = 'City not found';
    }
}


// dateOptionsSelectElement.addEventListener("change", () => {

//     switch (dateOptionsSelectElement.value) {
//         case "yyyy-mm-dd":
//             currentDateResult.textContent = formattedDate
//                 .split("-")
//                 .reverse()
//                 .join("-");
//             break;
//         case "mm-dd-yyyy-h-mm":
//             currentDateResult.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
//             break;
//         default:
//             currentDateResult.textContent = formattedDate;
//     }
// });

// async function getTime() {
//     const city = document.getElementById('cityInput').value;
//     const apiKey = 'AIzaSyDB3qC0Y1NDXMbNVSwx7B0B-r3yzWsvVwo'; // Replace with your Google API key
//     const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(city)}&key=${apiKey}`);
//     const data = await response.json();

//     if (data.results.length > 0) {
//         const location = data.results[0].geometry.location;
//         const lat = location.lat;
//         const lng = location.lng;

//         const timeZoneResponse = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`);
//         const timeZoneData = await timeZoneResponse.json();
//         const timeZone = timeZoneData.timeZoneId;

//         const currentTime = new Date().toLocaleString('en-US', { timeZone: timeZone });
//         const currentDateResult = document.getElementById("current-date");
//         currentDateResult.textContent = `Current time in ${city}: ${currentTime} `;
//     } else {
//         currentDateResult.textContent = 'City not found';
//     }
// }

// const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

// function getCurrentTime(timeZone) {
//     const options = {
//         timeZone: timeZone,
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         hour12: false // Use 24-hour format
//     };

//     const formatter = new Intl.DateTimeFormat('en-US', options);
//     return formatter.format(new Date());
// }

// const newYorkTime = getCurrentTime('America/New_York');
// const londonTime = getCurrentTime('Europe/London');
// const laTime = getCurrentTime('America/Los_Angeles');

// console.log('Current time in New York:', newYorkTime);
// console.log('Current time in London:', londonTime);
// console.log('Current time in Los Angeles: ', laTime);

// const axios = require('axios');

