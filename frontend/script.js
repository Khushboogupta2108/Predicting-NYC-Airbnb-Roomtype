const form = document.getElementById("predictionForm");
const emptyState = document.getElementById("emptyState");
const resultContent = document.getElementById("resultContent");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const prediction = document.getElementById("prediction");
const confidenceValue = document.getElementById("confidenceValue");
const progressBar = document.getElementById("progressBar");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    emptyState.classList.add("hidden");
    resultContent.classList.add("hidden");
    errorMessage.classList.add("hidden");
    loading.classList.remove("hidden");

    const data = {
        latitude: Number(document.getElementById("latitude").value),
        longitude: Number(document.getElementById("longitude").value),
        price: Number(document.getElementById("price").value),
        minimum_nights: Number(document.getElementById("minimum_nights").value),
        number_of_reviews: Number(document.getElementById("number_of_reviews").value),
        reviews_per_month: Number(document.getElementById("reviews_per_month").value),
        calculated_host_listings_count: Number(document.getElementById("calculated_host_listings_count").value),
        availability_365: Number(document.getElementById("availability_365").value),
        neighbourhood_group: document.getElementById("neighbourhood_group").value,
        neighbourhood: document.getElementById("neighbourhood").value
    };

    try {
        const response = await fetch("https://predicting-nyc-airbnb-roomtype-1.onrender.com/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.detail || "Prediction failed.");
        }

        const probabilities = result.Probability;
        const maxProbability = Math.max(...probabilities);
        const confidence = Math.round(maxProbability * 100);

        prediction.textContent = result.Predicted_room_type;
        confidenceValue.textContent = `${confidence}%`;

        loading.classList.add("hidden");
        resultContent.classList.remove("hidden");

        requestAnimationFrame(() => {
            progressBar.style.width = `${confidence}%`;
        });

    } catch (error) {
        loading.classList.add("hidden");
        errorMessage.textContent = error.message || "Unable to connect to the prediction API.";
        errorMessage.classList.remove("hidden");
    }
});

resetBtn.addEventListener("click", () => {
    resultContent.classList.add("hidden");
    errorMessage.classList.add("hidden");
    progressBar.style.width = "0%";
    emptyState.classList.remove("hidden");
    form.reset();
});

