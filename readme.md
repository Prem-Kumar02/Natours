# Natours - Tour Booking Application

## Overview
Natours is a modern tour booking application built with Node.js, Express, and MongoDB. It allows users to discover and book tours, manage bookings, and interact with tour reviews.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for Authentication
- Stripe for Payments

## Features
- User authentication and authorization
- Tour booking system
- Payment processing
- Tour reviews and ratings
- User profiles
- Advanced API features (filtering, sorting, pagination)

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/natours.git
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory with:
```
vaiables mentioned in the .env.example file
```

4. Run the application
```bash
npm start
```

## Main Endpoints
- `/api/v1/tours` - Tour operations
- `/api/v1/users` - User operations
- `/api/v1/bookings` - Booking operations
- `/api/v1/reviews` - Review operations

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request


## 🚀 DevOps Implementation

This project demonstrates full DevOps practices for the Natours Node.js app:

- **CI/CD:** GitHub Actions pipeline triggers on push to main branch
- **Deployment:** Render (Free Tier) automatically updates the app
- **Containerization:** Dockerized Node.js application
- **Infrastructure as Code (Optional):** Terraform for reproducible cloud resources
- **Database:** MongoDB Atlas for cloud database

### CI/CD Flow
1. Push code to `main` branch
2. GitHub Actions installs dependencies & runs tests
3. On success, deployment is triggered via Render API
4. The live app updates automatically ([Live Demo](<https://natours-7qx4.onrender.com))

### Required Secrets
- `RENDER_API_KEY`
- `RENDER_SERVICE_ID`
- `SLACK_WEBHOOK_URL`

### Future Enhancements
- Add monitoring (Prometheus/Grafana)
- Integrate static code analysis (SonarCloud)


## Author
Prem Kumar