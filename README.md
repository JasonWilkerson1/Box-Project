The Box Project - Fullstack Website
Overview
The Box Project is a heartfelt non-profit initiative dedicated to transforming the lives of families and individuals enduring rural poverty in the Mississippi Delta, one of the most economically challenged regions in the United States. Established with a vision to break the cycle of generational poverty, our mission centers on fostering meaningful relationships, promoting educational opportunities, and delivering essential material aid. Through our innovative "Recipient Family Match Program," we connect compassionate sponsor volunteers with families in need, cultivating friendships that often span decades and provide a lifeline of support.
This repository houses the fullstack website for The Box Project, meticulously crafted to share our story, facilitate donations, and streamline the management of recipient-sponsor relationships. The frontend is built with React, offering an engaging user interface, while the backend leverages Flask with a MySQL database, secured via SSH tunneling for robust data protection. This platform serves as a digital hub to amplify our impact and invite community participation.
Mission and Vision

Mission: Encourage and enrich the lives of rural families by establishing lasting relationships, promoting education, and providing material support to combat generational poverty in the MS Delta.
Vision: Create a future where every family in the Mississippi Delta has the resources and confidence to thrive, supported by a network of caring sponsors and volunteers.
Impact: Over 60 years, we have touched the lives of approximately 20,000 families, with many sponsor-recipient pairs maintaining friendships for over 30 years.

Your direct involvement is the cornerstone of our success. Without the generosity of sponsors and volunteers, our ability to uplift these communities would be severely limited. Together, we can empower more families to break free from poverty's grasp.
Features

About Us: Dive into our mission, explore the referral process for identifying families in need, and learn about our partnerships with esteemed agencies such as But God Ministries and Jonestown Life Center.
Our Story: Discover the rich history of The Box Project, from its origins to its current reach across multiple Delta counties, supported by impactful videos, audio testimonials, and visual data.
Donate: Contribute financially through secure membership and donation forms, managed in collaboration with the Community Foundation of Northwest Mississippi, an accredited foundation with the Council on Foundations’ National Standards.
Admin Panel: Offers secure admin login functionality and the ability to generate unique access codes for recipients via RESTful APIs.
Application Form: Enables recipients to validate codes and submit detailed applications, ensuring a streamlined matching process with sponsors.

Where We Serve
The Mississippi Delta, a region steeped in history, struggles with persistent poverty, illiteracy, and inadequate living conditions, particularly among communities of color. Despite ongoing efforts, challenges such as low-income job opportunities, limited educational access, and reduced government resources perpetuate this cycle. The Box Project currently serves the following counties:

[List specific counties served, e.g., Bolivar, Coahoma, etc., if available]Our reach has expanded over decades, but recent economic pressures from inflation and the pandemic have increased demand, outpacing sponsor sign-ups. Your support is more critical than ever.

Getting Started
Prerequisites
To run this project locally, ensure you have the following installed:

Node.js (v14.x or later) and npm for the frontend
Python 3.x (v3.8 or later) for the backend
MySQL Server for database management
SSHTunnel for secure database connections
Git for version control

Installation
Frontend Setup

Clone the repository:git clone https://github.com/your-username/the-box-project.git
cd the-box-project/frontend


Install dependencies:npm install


Start the development server:npm start

The app will be available at http://localhost:3000.

Backend Setup

Navigate to the backend directory:cd the-box-project/backend


Install Python dependencies:pip install -r requirements.txt

(Create requirements.txt with the following content:flask
flask-cors
flask-bcrypt
mysql-connector-python
sshtunnel

)
Configure database credentials:
Open app.py and update the following variables with your MySQL details:
host = "127.0.0.1"
port = 3306
database = "group8"
username = "group8"
password = "olemi$$2023"


For production, use environment variables or a .env file for security.


Set up SSH tunneling (if required):
Configure SSHTunnelForwarder with your SSH server details (e.g., host, username, key file).


Run the Flask application:python app.py

The backend will run on http://localhost:5000 by default.

Usage

Website: Visit http://localhost:3000 to explore the site. Navigate to "About," "Our Story," and "Donate" pages.
Admin Access: Use /api/create-admin (POST) to register and /api/login (POST) to authenticate. Generate recipient codes via /api/generate-key.
Recipient Actions: Validate codes with /api/validate-code/<code> (GET) and submit forms via /api/application-form (POST).
Donations: Click donation links under the "Donate" section to contribute or join as a sponsor.

Technologies

Frontend: React, CSS for a responsive and visually appealing interface
Backend: Flask (Python), MySQL for data storage, Bcrypt for password hashing, CORS for cross-origin support
Security: SSH tunneling for database access, secure API endpoints
Deployment: Compatible with platforms like Heroku, AWS, or Vercel with appropriate configuration

Contributing
We warmly welcome contributions to enhance The Box Project website! Whether you're a developer, designer, or advocate, your skills can make a difference. Here's how to get involved:
Contribution Guidelines

Fork the Repository:
Click the "Fork" button on GitHub to create your own copy.


Create a Feature Branch:
Run git checkout -b feature/your-feature-name to start a new branch.


Make Changes:
Implement your feature or fix. Follow the existing code style (e.g., PEP 8 for Python, ESLint for React).


Commit Changes:
Use descriptive messages: git commit -m "Add new donation form validation".


Push to GitHub:
Push your branch: git push origin feature/your-feature-name.


Open a Pull Request (PR):
Submit a PR with a clear title and description. Include details on what was changed and why.


Code Review:
Expect feedback from maintainers. Address comments and update your PR as needed.


Merge:
Once approved, your changes will be merged into the main branch.



Issues

Report bugs or suggest features by opening an issue on GitHub.
Use the issue template provided (create one if absent) with steps to reproduce and expected behavior.

Coding Standards

Write clean, commented code.
Test your changes locally before submitting.
Ensure compatibility with existing features.

Development Notes

Database Schema: The recipient and admin tables store user data. Modify schemas in app.py if extending functionality.
API Endpoints: All endpoints are prefixed with /api/. Add new routes in app.py with appropriate error handling.
Frontend Routing: Use React Router for navigation between "About," "Our Story," and "Donate" pages.

Troubleshooting

Connection Errors: If MySQL fails, verify host, port, and SSH tunnel settings. Check firewall rules.
CORS Issues: Ensure flask-cors is configured correctly in app.py.
Build Failures: Clear node_modules and package-lock.json, then reinstall dependencies with npm install.
Performance: Reduce segments in geometry creation if the site lags on lower-end devices.

Future Plans

Mobile Optimization: Enhance responsiveness for mobile users.
Donation Tracking: Add a dashboard for sponsors to track their contributions.
Multi-Language Support: Translate content for broader accessibility.
Volunteer Portal: Create a dedicated section for volunteer sign-ups and coordination.

Contact

Email: contact@theboxproject.org (replace with actual email)
Website: theboxproject.org (replace with actual URL)
Address: Community Foundation of Northwest Mississippi, c/o The Box Project, 315 Losher St., Hernando, MS 38632
Social Media: Follow us on X (add actual handle if available)

License
This project is licensed under the MIT License - see the LICENSE file for details. This allows free use, modification, and distribution, provided the original copyright and license notice are included.
Acknowledgments

Partners: But God Ministries, Jonestown Life Center, and other referral agencies for their tireless efforts.
Community: The sponsors, volunteers, and over 20,000 families who have shaped our 60-year journey.
Inspiration: The resilience of the MS Delta communities and the transformative power of giving.


Last updated: June 12, 2025 at 02:15 AM CDT
