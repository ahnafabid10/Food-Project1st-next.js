# FoodHub - Next.js Application

## Project Description
FoodHub is a simple web application built with **Next.js 15/16 (App Router)** and **Express.js**. The app demonstrates public and protected pages with a basic authentication mechanism. Users can view items, see item details, and log in to access protected content.  

The app includes:
- Landing page with multiple sections
- Mock authentication
- Public item listing and item details

---

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Routes Summary](#routes-summary)
- [Login Credentials](#login-credentials)
- [Live Demo](#live-demo)

---

## Features

### Core Features
1. **Landing Page**
   - Includes **7 sections** (besides Navbar & Footer)
   - Navbar links to **Login** and **Items/List** pages
   - Publicly accessible (no authentication required)

2. **Authentication**
   - Mock login with **hardcoded email & password**
   - Credentials stored in **cookies**
   - Protected routes redirect unauthenticated users
   - On successful login, user is redirected to **Items/List** page

3. **Item List Page**
   - Publicly accessible
   - Fetches and displays a list of items from an **Express.js API/JSON**
   - Each item card shows:
     - Name
     - Description
     - Price
     - Image

4. **Item Details Page**
   - Displays full details of a single product
   - Publicly accessible

---

## Technologies Used
- **Next.js 15/16** (App Router)
- **Express.js** for API / JSON data handling
- **Tailwind CSS** (or any preferred styling solution)
- **React** for frontend components
- **js-cookie** for storing authentication tokens

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/ahnafabid10/Food-Project1st-next.js.git
cd Food-Project1st-next.js
```
Install dependencies for Next.js
```
npm install
```

Install dependencies for Express.js API
```
cd server
npm install
```

Run the Express server
```
npm run dev
```

Run the Next.js app
```
npm run dev
```

Open the app
Go to http://localhost:3000

Routes Summary
Route	Access	Description
/	Public	Landing page with 7 sections
/login	Public	Login page for authentication
/items	Public	List of all items
/items/[id]	Public	Item details page
Login Credentials (Mock)

Email: admin@foodhub.com

Password: password123