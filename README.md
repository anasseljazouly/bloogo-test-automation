# Bloogo APP

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=blue&color=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/cypress-CA4245?style=for-the-badge&logo=cypress&logoColor=white&color=black)


A Blog App for all Coders, Programmers, and other.

A Bloogo app made using react js as frontend and FastAPI as backend, and Storing data in a MongoDB ulimately also known as FARM Stack APP.

## Bloogo Features

1. **Markdown Blogging:**

   - _Description:_ Users can create and publish blog posts using Markdown syntax for rich and structured content.

2. **Tagging System:**

   - _Description:_ Bloggers can categorize their posts by adding tags, facilitating content organization.

3. **Thumbnail Upload:**

   - _Description:_ Users can upload custom thumbnails for their blog posts, enhancing visual appeal.

4. **Advanced Login/Register System:**

   - _Description:_ Robust user authentication system ensures secure login and registration processes.

5. **Cloudinary Integration:**

   - _Description:_ Images are stored and managed using Cloudinary, a cloud-based media management solution.

6. **User Profile Image:**

   - _Description:_ Users can upload and personalize their profile images.

7. **Search Features:**

   - _Description:_ Users can search for blogs based on various criteria, including content, author, and tags.

8. **FastAPI for Automatic Error Handling:**

   - _Description:_ Utilizing FastAPI library for automatic error handling, ensuring smooth and efficient error resolution.

9. **JWT Verification:**

   - _Description:_ JSON Web Token (JWT) verification is implemented for secure authentication and authorization.

10. **Account Verification through Email:**
    - _Description:_ Users undergo account verification through email, enhancing security and confirming valid user accounts.

## Forked Link

[Bloogo APP](https://github.com/PrathameshDhande22/Bloogo-App)

## Guide

**Guide For running the project locally in your system.**

#### Running the Backend

1. Clone the Repository

```
git clone https://github.com/anasseljazouly/bloogo-test-automation.git
```

2. Make Sure You have `python` installed in your system with `version => 3.10.3`

Goto backend Folder.

```
cd backend
```

3. Simple command it will automatically create the virtual environment and install the packages.

   **Note :** The Poetry package should be installed in our System before triggering the below commands.

```
poetry install
```

if any error comes google the error it will Solved.

4. Create `.env` file

```
MONGODB_URI=Your Mongodb URI
SECRET=Jwt secret
EMAIL= Your Email addresss
PASSWORD= Your email address password
LINK=http://localhost:5173 of the frontend.
CLOUD_NAME=cloudinary cloud name
API_KEY=Cloudinary api key
API_SECRET=Cloudinary api secret
UPLOAD_PRESET=Cloudinary Upload preset
```

7. Run

```
poetry run python run.py
```

Backend is Running Successfully in your System.

#### Running the Frontend

1. Navigate to Frontend Folder.

```
cd frontend
```

2. Create .env File in it which contains various Values.

```
VITE_BASE_API=backend running url
VITE_CLOUD_NAME=cloudinary cloud name
```

3. Install the dependencies.

```
npm install
```

4. Run the project.

```
npm run dev
```

The project setup is complete.

#### Running E2E tests

- [E2E tests](./frontend/cypress/README.md)

## 📑 Documentation

- [Test Plan](./TestPlan.md)

- [Bugs](./Bugs.md)