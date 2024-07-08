# Gitam Bloodbank Project

Website URL: <a href="https://bloodbankgitam.github.io/Bloodbank_react/">Bloodbank.live</a>

This repository contains the source code and documentation for the Gitam Bloodbank project, a web application designed to streamline blood inventory management for hospitals. The application is built using React.js for the front-end and Firebase for real-time NoSQL database support.

## Features

- **Intuitive User Interface**: Designed using React.js to provide a user-friendly experience for managing blood inventory.
- **Real-time Data Updates**: Utilizes Firebase as a backend to ensure real-time updates of blood inventory and donor information.
- **Secure Authentication**: Implements Firebase Authentication for secure login and access control.
- **Responsive Design**: The application is responsive and works seamlessly across desktop and mobile devices.
- **Search and Filter Functionality**: Allows users to search for specific blood types, donors, and filter based on various criteria.
- **Dashboard**: Provides an overview of blood availability, recent donations, and other relevant metrics.

## Technologies Used

- **Front-end**: React.js, HTML, CSS
- **Back-end / Database**: Firebase (Realtime Database, Authentication)
- **Deployment**: Firebase Hosting (for hosting the web application)

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/bloodbankgitam/Bloodbank_react.git
   ```
   
2. Navigate into the project directory:
   ```
   cd Bloodbank_react
   ```
   
3. Install dependencies using npm or yarn:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Set up Firebase Authentication and Realtime Database according to your requirements.
   - Update Firebase configuration in your project (`src/firebase/firebaseConfig.js` or similar).

5. Start the development server:
   ```
   npm start
   ```
   This will start the development server and open the application in your default web browser.

6. You can now access the application at `http://localhost:3000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- The project was developed as a part of learning new technologies and creating a solution for efficient blood inventory management.
- We thank the developers and contributors for their valuable efforts.

---

Feel free to customize this README according to your project specifics and add any additional sections as needed. Happy coding!
