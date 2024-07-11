# Adopt Pets Application 🐾

React based web application that allows users to browse and adopt pets, using Frontend Masters Pet API to fetch detailed information on various pets, including images, descriptions, and other relevant data.

## How To Run the App

1.  Clone the repository.

2.  Open a terminal window.

3.  Navigate to the root folder of the project in the terminal using the `cd` comamand:

        cd adopt-me

4.  Install the dependencies:

        npm i

5.  Then run the command:

        npm run dev

## Tools 🛠️

- React Router

- React Query

- Context API

- Portals

- Error Boundaries

## Description

The app allows users to search for pets by location, type, and breed. It provides detailed information about each pet, including images and descriptions. Users can confirm their decision to adopt a pet through a modal dialog. Global state management for adopted pets is achieved using React Context. Error handling is implemented with ErrorBoundary to ensure a seamless user experience. Modals are rendered outside the main DOM hierarchy using React Portals.

## App Functionality

The app consists of several main components:

- App: The main entry point that sets up routing and wraps the entire application.

- SearchParams: Manages the search form and displays the search results.

- Results: Renders the list of pets based on search criteria.

- Details: Shows detailed information about a selected pet, including an option to adopt.

- Pet: Represents a single pet entity, displaying its image and basic information.

- Carousel: Displays a carousel of pet images.

- Modal: Renders a modal dialog using React Portals.

- ErrorBoundary: Handles errors within the component tree and renders an alternative UI when errors occur.

- AdoptedPetContext: Provides global state management for adopted pets.

### Credits 📝

- Inspired by the course "Complete Intro to React" from Frontend Masters
