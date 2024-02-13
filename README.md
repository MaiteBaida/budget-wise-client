# Project Title

BudgetWise

## Overview

Expense Tracker Plus is designed to help users efficiently manage their finances by categorizing and tracking expenses.

### Problem

Managing personal finances can be challenging, especially when it comes to tracking various expenses across different categories. Without a centralized system, individuals often struggle to monitor expenses accurately. Moreover, they lack insights into payment frequencies and missed payments, leading to potential overspending and financial stress.

### User Profile

Budget-conscious individuals: - seeking a convenient way to categorize and track expenses - interested in estimating and recording actual payment amounts - looking for insights into payment frequencies and missed payments to maintain financial discipline

### Features

Expense Tracking:

- Users can track their expenses and categorize them as fixed, essential, or non-essential.
- Expenses can be recorded with estimated amounts and actual paid amounts for accurate budgeting.

Account Management:

- Users can create accounts to manage their expense records securely.
- Registered users can log in to their accounts to access personalized expense tracking features.

Payment Frequency Insights:

- Users can monitor missed payments and analyze spending patterns for better financial planning.

Notes and Comments:

- Users can add notes and comments to expense entries for additional context and reminders.
- This feature helps users keep track of specific details related to each expense.

## Implementation

### Tech Stack

- React
- JavaScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page
- Set up tables page
- Edit expenses table page
- View a table item page
- Edit a table item page
- Signup page
- Login page
![](site-map.pdf)
<!-- Confirm Link -->

### Mockups

#### Home Page

![](home.png)

#### Signup Page

![](register.png)

#### Set Up Tables Page

![](login.png)

#### Login Page

![](login.png)

#### Edit expenses table

![](enter-location.png)

#### View a table item

![](view-cafes.png)

#### Edit a table item

![](view-cafe.png)

### Data

![](sql-diagram.png)

### Endpoints

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Create seeds with user information for each table

- Deploy client and server projects so all commits will be reflected in production

- Feature: Create account

  - Implement register page + form
  - Create POST /register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /login endpoint

- Feature: Setup tables page

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Feature: Home page

  - Implement user overview
  - Implement fixed expenses table
  - Implement essential expenses table
  - Implement non-essential expenses table

- Feature: Edit table page

  - Implement edit table page
  - Create PUT /table/:tableid/edit endpoint

- Feature: View item page

  - Implement view item page
  - Create GET /expense/:id

- Feature: Edit item page

  - Implement view item page
  - Create GET /expense/:id/edit

- Bug fixes

- DEMO DAY

## Nice-to-haves

- Option to login with Google and Apple

Estimate Savings Calculation:

- Calculate the estimated savings value for the user based on the the difference between fixed expenses and actual expenses.
- Users can set savings goals and track their progress over time.

Savings and Investments Table:

- Users can access a dedicated table to control and manage their savings and investments.
- The table allows users to input savings amounts, track investment performance, and set financial goals for the future.
- Users can view a summary of their savings and investments, including growth over time and potential returns.

Non-Essential Expenses Analysis:

- Users can view a breakdown of non-essential expenses based on their fixed and essential expenses.
- This feature provides insights into discretionary spending habits and allows users to make informed decisions about their finances.
