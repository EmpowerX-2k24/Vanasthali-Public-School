const cities = [
    { name: 'New Delhi', coords: [28.6139, 77.2090], safety: 'Unsafe' },
    { name: 'Mumbai', coords: [19.0760, 72.8777], safety: 'Medium' },
    { name: 'Kolkata', coords: [22.5726, 88.3639], safety: 'Safe' },
    { name: 'Chennai', coords: [13.0827, 80.2707], safety: 'Safe' },
    { name: 'Bengaluru', coords: [12.9716, 77.5946], safety: 'Safe' },
    { name: 'Hyderabad', coords: [17.3850, 78.4867], safety: 'Safe' },
    { name: 'Ahmedabad', coords: [23.0225, 72.5714], safety: 'Unsafe' },
    { name: 'Pune', coords: [18.5204, 73.8567], safety: 'Safe' },
    { name: 'Jaipur', coords: [26.9124, 75.7873], safety: 'Unsafe' },
    { name: 'Surat', coords: [21.1702, 72.8311], safety: 'Safe' },
    { name: 'Lucknow', coords: [26.8467, 80.9462], safety: 'Medium' },
    { name: 'Kanpur', coords: [26.4499, 80.3319], safety: 'Unsafe' },
    { name: 'Nagpur', coords: [21.1458, 79.0882], safety: 'Unsafe' },
    { name: 'Visakhapatnam', coords: [17.6889, 83.2185], safety: 'Safe' },
    { name: 'Patna', coords: [25.5941, 85.1376], safety: 'Medium' },
    { name: 'Vadodara', coords: [22.3072, 73.1812], safety: 'Medium' },
    { name: 'Ghaziabad', coords: [28.6692, 77.4538], safety: 'Medium' },
    { name: 'Nashik', coords: [19.9975, 73.7877], safety: 'Safe' },
    { name: 'Indore', coords: [22.7196, 75.8577], safety: 'Unsafe' },
    { name: 'Coimbatore', coords: [11.0168, 76.9558], safety: 'Safe' },
    { name: 'Kochi', coords: [9.9312, 76.2673], safety: 'Unsafe' },
    { name: 'Bhopal', coords: [23.2599, 77.4126], safety: 'Medium' },
    { name: 'Chandigarh', coords: [30.7333, 76.7794], safety: 'Safe' },
    { name: 'Mysuru', coords: [12.2958, 76.6394], safety: 'Safe' },
    { name: 'Agra', coords: [27.1767, 78.0081], safety: 'Medium' },
    { name: 'Rajkot', coords: [22.3039, 70.8022], safety: 'Medium' },
    { name: 'Bhubaneswar', coords: [20.2961, 85.8245], safety: 'Safe' },
    { name: 'Vijayawada', coords: [16.5062, 80.6480], safety: 'Medium' },
    { name: 'Aurangabad', coords: [19.8762, 75.3433], safety: 'Unsafe' },
    { name: 'Madurai', coords: [9.9258, 78.1198], safety: 'Safe' },
    { name: 'Dehradun', coords: [30.3165, 78.0322], safety: 'Safe' },
    { name: 'Jodhpur', coords: [26.2389, 73.0243], safety: 'Medium' },
    { name: 'Amritsar', coords: [31.6340, 74.8723], safety: 'Safe' },
    { name: 'Raipur', coords: [21.2514, 81.6296], safety: 'Medium' },
    { name: 'Srinagar', coords: [34.0837, 74.7973], safety: 'Unsafe' },
    { name: 'Thane', coords: [19.2183, 72.9781], safety: 'Medium' },
    { name: 'Gurugram (Gurgaon)', coords: [28.4595, 77.0299], safety: 'Medium' },
    { name: 'Noida', coords: [28.5355, 77.3910], safety: 'Medium' },
    { name: 'Ranchi', coords: [23.3441, 85.3095], safety: 'Medium' },
    { name: 'Dharamshala', coords: [32.2192, 76.3237], safety: 'Safe' },
    { name: 'Udaipur', coords: [24.5854, 73.7125], safety: 'Safe' },
    { name: 'Kota', coords: [25.2138, 75.8648], safety: 'Medium' },
    { name: 'Tirupati', coords: [13.6288, 79.4192], safety: 'Safe' },
    { name: 'Navi Mumbai', coords: [19.0374, 73.0297], safety: 'Medium' },
    { name: 'Puducherry', coords: [11.9416, 79.8083], safety: 'Unsafe' },
    { name: 'Mangalore', coords: [12.9141, 74.8559], safety: 'Safe' },
    { name: 'Haridwar', coords: [29.9457, 78.1642], safety: 'Safe' },
    { name: 'Jamshedpur', coords: [22.8046, 86.2029], safety: 'Medium' },
    { name: 'Bikaner', coords: [28.0229, 73.3119], safety: 'Medium' },
    { name: 'Vellore', coords: [12.9215, 79.1327], safety: 'Medium' },
    { name: 'Kozhikode', coords: [11.2588, 75.7804], safety: 'Safe' },
    { name: 'Patiala', coords: [30.3376, 76.3964], safety: 'Medium' },
    { name: 'Kolhapur', coords: [16.7064, 74.2439], safety: 'Safe' },
    { name: 'Gwalior', coords: [26.2183, 78.1826], safety: 'Medium' },
    { name: 'Shillong', coords: [25.5788, 91.8933], safety: 'Safe' },
    { name: 'Durgapur', coords: [23.5253, 87.2905], safety: 'Medium' },
    { name: 'Kalyan', coords: [19.2184, 73.1594], safety: 'Medium' },
    { name: 'Jammu', coords: [32.7266, 74.8570], safety: 'Unsafe' },
    { name: 'Sangli', coords: [16.8602, 74.5794], safety: 'Medium' },
    { name: 'Hajipur', coords: [25.6886, 85.2094], safety: 'Medium' },
    { name: 'Kharagpur', coords: [22.3529, 87.3134], safety: 'Medium' },
    { name: 'Bardhaman', coords: [23.0320, 87.8610], safety: 'Medium' },
    { name: 'Agartala', coords: [23.8357, 91.2869], safety: 'Medium' },
    { name: 'Shimla', coords: [31.1048, 77.1734], safety: 'Safe' },
    { name: 'Silchar', coords: [24.8070, 92.7742], safety: 'Medium' },
    { name: 'Tiruvananthapuram', coords: [8.5241, 76.9366], safety: 'Safe' },
    { name: 'Rourkela', coords: [22.2616, 84.8370], safety: 'Medium' },
    { name: 'Bilaspur', coords: [22.0702, 82.1516], safety: 'Medium' },
    { name: 'Jabalpur', coords: [23.1762, 79.9557], safety: 'Medium' },
    { name: 'Karnal', coords: [29.6835, 76.9832], safety: 'Medium' },
    { name: 'Bhopal', coords: [23.2599, 77.4126], safety: 'Safe' },
    { name: 'Jaunpur', coords: [25.7332, 82.6838], safety: 'Unsafe' },
    { name: 'Muzaffarpur', coords: [26.1202, 85.3926], safety: 'Unsafe' },
];
// Initialize map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Load map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers for each predefined city
cities.forEach(city => {
    const marker = L.circleMarker(city.coords, {
        radius: 8,
        color: city.safety === 'Safe' ? 'green' : city.safety === 'Medium' ? 'yellow' : 'red',
    }).addTo(map).bindTooltip(city.name + ': ' + city.safety);
});

// Update the result display color based on the safety level
function updateResult(city) {
    const resultDiv = document.getElementById('result');
    
    if (city) {
        const safetyLevel = city.safety;
        resultDiv.innerHTML = `${city.name}: Safety level is <strong>${safetyLevel}</strong>`;
        
        // Change text color according to safety level
        resultDiv.style.color = safetyLevel === 'Safe' ? 'green' :
                                safetyLevel === 'Medium' ? 'yellow' : 'red'; 
    } else {
        resultDiv.innerHTML = `City not found.`;
        resultDiv.style.color = 'gray'; // Default color for not found
    }
}

// Add event listener for search button
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.trim();
    const resultDiv = document.getElementById('result'); // Get the result div
    resultDiv.innerHTML = ''; // Clear previous results

    const city = cities.find(city => city.name.toLowerCase() === searchInput.toLowerCase());

    if (city) {
        map.setView(city.coords, 10); // Zoom in on the found city
        updateResult(city); // Call the function to update result and color
    } else {
        // If city is not found, prompt the user to find the closest city
        const coords = getCoordsFromCityName(searchInput);
        if (coords) {
            const closestCity = findClosestCity(coords);
            if (closestCity) {
                updateResult(closestCity); // Use the same function for closest city
                map.setView(closestCity.coords, 10); // Zoom in on the closest city
            }
        } else {
            resultDiv.innerHTML = `${searchInput} not ranked yet.`; // Display result
            resultDiv.style.color = 'gray'; // Default color for unranked
        }
    }
});

// Placeholder function to get coordinates for unranked cities
function getCoordsFromCityName(cityName) {
    // Implement logic to return coordinates of unranked cities if available
    return null; // Return null for now, needs to be implemented based on your needs
}
