# JECRC Talent Nexus

This TPO Management App is a web application designed to streamline the Training and Placement process at educational institutions. This app provides an interface for students and companies to interact with the Training and Placement Office, facilitating improved networking opportunities, career guidance, and data-driven decision-making.

## Table of Contents
- [Features](#features)
- [Front End](#front-end)
- [Back End](#back-end)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Enhanced Networking Opportunities**: Students have increased access to networking events and interactions with industry professionals, leading to potential internships or mentorship opportunities.
- **Improved Career Guidance**: The platform provides resources such as career advice articles, interview tips, and resume building tools, aiding students in their career development journey.
- **Data-Driven Decision Making**: Colleges can gather data on student interests, recruitment trends, and alumni placements to make informed decisions about curriculum updates and career service improvements.

## ScreenShots

![screencapture-localhost-3000-2024-04-03-21_33_00](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/7ee4d79f-0cc8-4268-bc79-70676e6e6d57)

![screencapture-localhost-3000-register-2024-04-03-21_33_51](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/fa3da8e6-3efe-4a9d-97ca-876ddcf71533)

![screencapture-localhost-3000-stdregister-2024-04-03-21_35_18](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/08253611-58bb-417e-a6aa-ebc900f28a4d)


![screencapture-localhost-3000-compregister-2024-04-03-21_34_36](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/caa8d165-fcec-4570-87be-08d23984f893)

![Screenshot 2024-06-13 213555](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/049883c1-3309-466d-9b99-a0d4a43997bf)
![Screenshot 2024-06-13 213424](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/a1dbda59-4792-465d-a213-3268550b378c)
![screencapture-localhost-3000-stdregister-2024-04-03-21_35_18](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/f8e2bba9-7f84-443f-83db-923b60b1b7cc)
![FireShot Capture 015 - Email Verification Request - anandini556@gmail com - Gmail - mail google com](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/6e964bde-10e1-48a3-8a54-0c1e07c4d9a0)

![screencapture-localhost-3000-login-2024-04-03-21_36_10](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/65051931-88ca-4bd9-8cd6-644437405633)
![screencapture-localhost-3000-complogin-2024-04-03-21_37_17](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/23cba90b-3709-45f9-b655-5b1fabc7a99e)
![screencapture-localhost-3000-login-2024-04-03-21_36_10](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/1ba86024-9561-4006-800c-e30d9eda6906)

![screencapture-localhost-3000-reset-recruiter-password-2024-04-03-21_38_35](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/2f34c1bc-4990-4efb-adf3-4b906b6a2b4a)

![FireShot Capture 017 - Reset Password Request - anandini556@gmail com - Gmail - mail google com](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/9ba17aff-2046-4ce5-bd55-d32080fbe786)

![FireShot Capture 019 - TPO - JECRC - localhost](https://github.com/Anandini18/Final_YEAR_PROJECT_TPO_MANAGEMENT/assets/88365547/28a7eed8-b599-4b64-b28e-e0271595f4f4)


## Front End

The front end of the project consists of three main React web pages:

1. **Home Section**
   - Provides all the placement facilities our college offers.
   - Contains a list of all the companies that have visited our campus for placements.

2. **Register Section**
   - **For Students**: Students visiting for the first time can register using their roll number.
   - **For Companies**: Companies can register using their business email.

3. **Login Section**
   - Allows students and companies who have already registered to log in using their corresponding credentials.

## Back End

The back end of the project is divided into four subdivisions:

1. **Admin DB**
   - Contains all information about the Training & Placement Officers, Heads, and their access controls.

2. **Recruiter**
   - Stores all the companies, their related databases, and their tech stack requirements.

3. **Students**
   - Stores student records, including their enrollment numbers, interests, certifications, and CGPA data.

4. **Notification**
   - Manages any notifications regarding placements.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tpo-management-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tpo-management-app
   ```

3. Install the dependencies for both the front end and back end:

   For the front end:
   ```bash
   cd frontend
   npm install
   ```

   For the back end:
   ```bash
   cd backend
   npm install
   ```

4. Start the development server:

   For the front end:
   ```bash
   npm start
   ```

   For the back end:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` for the front end.
2. Use `http://localhost:5000` for back end API interactions.

## Contributing

We welcome contributions to improve the TPO Management App! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.


