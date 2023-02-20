# Pokemons App

This is a pokemons app that renders pokemon cards and shows some information about them. Some of the information shown are images, held items, evolutions,stats, abilities etc.

## Tools used

- React
- Typescript
- Scss
- Redux toolkit
- Axios

### Style convention used

- Scss module styling was the convention used for this project and the scss files have a 's\_' prepended in their names
- CSS code arrangement was done alphabetically following the practice of this [article](https://ericwbailey.website/published/organize-your-css-declarations-alphabetically/) and a host of others.

## Project Structures

- Project logic is kept in src folder

### asset Folder

- Contains icons and images used.

### base-styles folder

Contains the sass partials, globals, and mixins used in the project

### Components

- Contains the react component files

#### pages

- Page-related components are kept in the page folder within the components folder

#### reusables

- reusable folder within the component folder contains components that are used across different files

### store

- Contains the redux toolkit logic

### Utils folder

- index.ts stores the extracted logic and functions which cannot be declared within a component
- Ts-file entails the type declarations for the store and pokemons data type
