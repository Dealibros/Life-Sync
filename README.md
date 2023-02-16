# Life-Sync - Your Personal Life Organizer



Hi there and welcome to LifeSync!!

![life-sync-logo](/media_files/life_sync_logo_small.png)

## What is LifeSync?

LifeSync is a comprehensive calendar app designed to help you organize your life, stay on top of your to-do list, and track your daily habits. With a user-friendly interface and a range of features, LifeSync makes it easy to plan your day, week, or month ahead, so you can stay focused and make the most of your time.

## Features

### Calendar
LifeSync offers a fully customizable calendar feature that allows you to add and filter events with ease. You can choose between daily, weekly, or overall views to get a better understanding of your schedule and never miss an appointment or deadline again.

![calendar-page](/media_files/calendar_page.png)

### To-Do List
With LifeSync's to-do list feature, you can keep track of all your tasks in one place. You can add, edit, and mark off tasks as you complete them, helping you stay organized and productive throughout the day.

![todo-list](/media_files/todo_list.png)

### Habit Tracker
LifeSync's habit tracker is a powerful tool for creating and tracking new habits. You can monthly goals and track your progress over time. With this feature, you can establish healthy habits, eliminate bad ones, and achieve your goals in no time.

![habit-tracker](/media_files/habit_tracker.png)

### Sleep and Mood Checker
LifeSync's Sleep and Mood Checker feature helps you keep track of your sleeping habits and how they affect your daily life. Each day when you first open the app, you will be prompted to record how well you slept and how you're feeling. You can add notes to provide more detail about your mood or any external factors that may have impacted your sleep or mood.

![sleep-mood-checker](/media_files/mood_checker.png)

### Mood and Sleep Graph
LifeSync's Mood and Sleep Graph feature allows you to visualize your sleep and mood patterns over time. The graph shows how your mood and sleep quality have been trending in the last month, providing insights into how they may be connected. This feature can help you identify trends and patterns in your sleep and mood that you may not have noticed otherwise.

![mood-sleep-graph](/media_files/mood_sleep_graph.png)

### Additional Features
In addition to the core features of the app, LifeSync also offers a small weather update to help you plan your day better. You also get a daily quote to help motivate and inspire you to achieve your goals.


## Technical Specifications
LifeSync is a full-stack web application that was developed using the following technologies:

**Frontend Framework**: React

**Backend Framework**: Spring Boot

**Database Management System**: PostgreSQL

**Integrated Development Environments (IDE)**: Visual Studio Code and IntelliJ

**Version Control**: Git

### Frontend
The frontend of the application was built using React, a popular and efficient JavaScript library for building user interfaces. The additional libraries used, (for example for the calendar or the charts) can be found in the package.json file in the 'frontend' folder.

### Backend
The backend of the application was built using Spring Boot, a powerful and flexible Java-based framework that provides a robust platform for building web applications. We used Spring Boot to create a RESTful API to handle data processing and communication between the frontend and backend.

### Database
The application's data was stored in a PostgreSQL database. PostgreSQL is an open-source relational database management system that is known for its reliability, performance, and scalability.

### IDE
We used Visual Studio Code for developing the frontend of the application and IntelliJ for the backend. Both IDEs provide a range of powerful features that make coding and debugging easier and more efficient.

### Version Control
We used Git for version control, which allowed us to manage and track changes to the codebase as we developed the application. We also used GitHub to store and share the codebase with the development team.

### Project Management
We utilized GitHub's project management features, including their Kanban board and issue tracker, to organize our development process and implement Scrum methodology. This allowed us to easily manage and prioritize tasks, track progress, and collaborate effectively as a team.

### Security
Security was a top priority during the development of LifeSync. The application implements a user authentication system, allowing users to create an account and securely log in to the application. Each user has their own unique account and is only able to access their own events and data. We also implemented encryption for sensitive user data such as passwords and other personal information. 


## How to Try LifeSync
If you want to try LifeSync on your local machine, follow the instructions below to get the application up and running.

### Prerequisites
Before you begin, make sure you have the following tools and software installed on your machine:

- **Git**
- **Node.js**
- **Java Development Kit (JDK)**
- **PostgreSQL**

### Installation
To get started, follow these steps:

- Clone the repository

- Create a PostgreSQL database

- Create a local datbase with the name "life_sync"

- Set up the environment variables (psql username and password, you can even set it up only from Intellij if that is what you use)

- Navigate to the backend directory and start the backend server

- Open a new terminal window and navigate to the frontend directory

- Install the dependencies and start the frontend server (start with the `npm install` command, followed by `npm start`)
  
- Open your web browser and navigate to http://localhost:3000 to access the LifeSync application.

### Usage
Once you've started the backend and frontend servers, you can use the application as you would normally. You can create an account and start adding events, to-do items, and habits to your calendar. You can also use the sleep and mood checker to track your sleep patterns and mood over time.
