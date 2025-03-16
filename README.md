# Netflix GPT

A Netflix-inspired movie browsing app built with React, Firebase, and TMDB API.

## Project Setup

- Initialized the project using **Vite**
- Installed **Tailwind CSS** for styling
- Organized folder structure:
  - **Pages** (for different app views)
  - **Components** (for reusable UI elements)
  - **Utils** (for utility functions)
- Implemented **React Router v6** for navigation

## Features Implemented

### Authentication

- **Sign In / Sign Up** form in a single component
- Form validation with error handling
- Used **useRef Hook** for form interactions
- Integrated **Firebase Authentication**:
  - User registration
  - Account login/logout
  - Profile username updates
- Created a **Redux store** with a **User Slice**
- Used **useNavigate Hook** for page redirection
- Unsubscribed from **onAuthStateChanged** callback upon logout

### Movie Browsing

- Registered on **TMDB** and fetched movie data via API
- Implemented a **Browse Page**:
  - **Main Movie Section**
    - Background trailer using **YouTube API**
    - Displayed movie title and description
  - **Movie List Sections**
    - Categorized movies (popular, upcoming, etc.)
    - Created **Movie Cards** for easy browsing
- Developed a **custom hook (useTrailer)** to fetch trailers efficiently

## Features to be Added

- Custom hooks for **sign-in** and **sign-up** logic
- Movie filtering based on ratings

---

Built with ❤️ using React, Redux, Firebase, and TMDB API.
