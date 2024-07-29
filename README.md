# Apple Showcase Website

The Apple Showcase Website is a simple web application designed to present Apple products using modern web technologies. It demonstrates the integration of a React.js frontend with a Django backend and showcases deployment on AWS infrastructure, including S3 for static content, EC2 for dynamic content, CloudFront for CDN, and a custom VPC for enhanced security.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Deployment](#deployment)
- [Usage](#usage)
- [License](#license)

## Project Overview
This project includes:
- A React.js frontend for displaying Apple products.
- A Django backend with two API endpoints.
- Deployment on AWS with S3, EC2, and optional CloudFront and custom VPC configurations.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Django
- **Deployment**: AWS (S3, EC2, CloudFront, VPC)

## Installation
### Prerequisites
- Node.js and npm
- Python and pip
- AWS CLI configured with your AWS account

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/apple-showcase-website.git
    cd apple-showcase-website
    ```

2. Set up a virtual environment and install dependencies:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Run the Django development server:
    ```sh
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```

2. Install dependencies and start the React development server:
    ```sh
    npm install
    npm start
    ```

## Deployment
### Deploying Frontend to AWS S3
1. Build the React app:
    ```sh
    npm run build
    ```

2. Upload the build files to an S3 bucket configured for static website hosting.

### Deploying Backend to AWS EC2
1. Launch an EC2 instance and SSH into it.

2. Set up the Django environment on the EC2 instance:
    ```sh
    sudo apt update
    sudo apt install python3-pip python3-venv nginx
    git clone https://github.com/your-username/apple-showcase-website.git
    cd apple-showcase-website
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    ```

3. Configure Gunicorn and Nginx to serve the Django application.

### Optional: AWS CloudFront and Custom VPC
- Create a CloudFront distribution for the S3 bucket.
- Set up a custom VPC with a private subnet and launch the EC2 instance in it.

## Usage
Once deployed, the website should be accessible publicly. You can interact with the frontend to view Apple products, which are fetched from the Django API.

