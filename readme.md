# Pair programming session task

This repo contains the startup files need for the pair programming session for front-end candidates.

## Methodology

Driver and Navigator style. The candidate will act as the driver, and the interviewer will be the navigator.

## Instructions

The main objective is to implement the front-end UI for a basic CRUD operation. The user should be able to:

* create new users
* retrieve a list of users
* update individual user information
* delete existing users

### TODO

1. Set up a UI layer that renders a visual representation of the application data.
2. Set up a data layer that handles application state.
3. Set up an API layer that handles interactions with the REST API.
4. Set up tests that are relevant to the project. Consider using TDD approach.

### **Important**

**The REST API does not persist the data that gets sent to it.** However, it does simulate a successful response when a compliant request is made. Candidate must take this into consideration when building the data layer.

## Resources

* REST API: https://my-json-server.typicode.com/dnasir/my-json-server/users