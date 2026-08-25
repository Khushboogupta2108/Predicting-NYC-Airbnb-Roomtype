# NYC Airbnb House Type Classification

An end-to-end Machine Learning project that classifies NYC Airbnb listings into different **property/room types** based on listing information.

The project includes data preprocessing, feature transformation, model training, model serialization, and a **FastAPI REST API** for making predictions.

## Live Demo

**FRONTEND URL:** https://predicting-nyc-airbnb-roomtype-2.onrender.com/
**Live API:** https://predicting-nyc-airbnb-roomtype-1.onrender.com/

**API Documentation:** https://predicting-nyc-airbnb-roomtype-1.onrender.com/docs

> The `/docs` page provides an interactive Swagger UI where you can enter input data and test the prediction API directly.

## Project Overview

This project uses the NYC Airbnb dataset to build a machine learning classification system.

The complete workflow is:

```text
Dataset
   ↓
Data Cleaning
   ↓
Feature Engineering
   ↓
Preprocessing Pipeline
   ↓
Machine Learning Model
   ↓
Model Serialization
   ↓
FastAPI
   ↓
Render Deployment
   ↓
Prediction API
```

## Features

* Data preprocessing using Scikit-learn
* Missing-value handling
* Numerical feature transformation
* Feature scaling
* Categorical feature encoding
* Machine Learning classification
* Saved preprocessing + model pipeline
* FastAPI REST API
* Interactive Swagger documentation
* Cloud deployment using Render

## Machine Learning Pipeline

The preprocessing pipeline handles numerical and categorical features separately.

### Numerical Features

The numerical preprocessing includes:

* Median imputation for missing values
* Yeo-Johnson transformation for skewed numerical features
* StandardScaler for feature scaling

### Categorical Features

The categorical preprocessing includes:

* Most-frequent-value imputation
* One-hot encoding
* `handle_unknown="ignore"` to handle unseen categories during prediction

The preprocessing and model are saved together as a pipeline so that the same transformations are automatically applied when new data is sent to the API.

## API

The application is built using **FastAPI**.

After deployment, the interactive API documentation can be accessed at:

```text
YOUR_RENDER_URL/docs
```

From the Swagger UI, users can:

1. Open the prediction endpoint.
2. Click **Try it out**.
3. Enter the required input values.
4. Click **Execute**.
5. View the predicted house type.

## Example API Workflow

```text
User Input
    ↓
FastAPI Endpoint
    ↓
Saved ML Pipeline
    ↓
Preprocessing
    ↓
Model Prediction
    ↓
Predicted House Type
```

## Technologies Used

* Python
* Pandas
* NumPy
* Scikit-learn
* FastAPI
* Uvicorn
* Joblib/Pickle
* Render
* Git & GitHub

## Project Structure

```text
Classifying_NYC_House_Types/
│
├── main.py
├── Model_pipeline.pkl
├── requirements.txt
├── README.md
└── other project files
```

## Deployment

The FastAPI application is deployed on **Render**.

The deployment uses:

```text
Build Command:
pip install -r requirements.txt
```

```text
Start Command:
uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Running Locally

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Classifying_NYC_House_Types
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the API:

```bash
uvicorn main:app --reload
```

Open:

```text
http://127.0.0.1:8000/docs
```

## Key Learning Outcomes

Through this project, I worked with:

* End-to-end machine learning workflows
* Scikit-learn preprocessing pipelines
* Numerical and categorical feature preprocessing
* Model serialization
* REST API development using FastAPI
* API testing using Swagger UI
* Git and GitHub
* Deploying an ML application to the cloud using Render

## Links

**GitHub Repository:** https://github.com/Khushboogupta2108/Predicting-NYC-Airbnb-Roomtype

**Live API:** https://predicting-nyc-airbnb-roomtype-1.onrender.com/

**API Documentation:** https://predicting-nyc-airbnb-roomtype-1.onrender.com/docs

