# Revised MERN Challenge

I've revised the MERN challenge in the curriculum to make it a little less complex for students at the junior dev level.

Follow the instructions below to make use of this revised version when submitting this assignment.

## Use of this Repo

Clone this repo. Then copy and paste the following folders/files from this repo into the *Develop* folder of the Challenge:

- *server/schemas/*
- *client/src/App.js*
- *client/src/pages/SavedBooks.js*
- *client/src/pages/SearchBooks.js*
- *client/src/components/LoginForm.js*
- *client/src/components/SignupForm.js*

Then follow the instructions below to edit these files as needed.

## Your Work

The goal of the challenge is to take an application built with a RESTful API and migrate it to GraphQL.

**Knowing this, let's first work in the *server/* files area.**

- Make sure you update *package.json* with the dependencies needed for GraphQL.
- You won't need the folders named *routes/* and *controllers/*, as GraphQL doesn't need them.
- You'll need to update the *server.js* file to properly load up GraphQL. You can find lots of examples of this in our curriculum materials.
- You'll need a *schemas* folder with the appropriate files inside. In this repo I have created a **starter** version of this folder and the files it contains. Follow the TODO items in each file.

**Now let's work in the *client/* files area.**

- Make sure you update *package.json* with the dependencies needed for GraphQL.
- You will find TODO items in the following files:

    - *src/App.js*
    - *src/pages/SavedBooks.js*
    - *src/pages/SearchBooks.js*
    - *src/components/LoginForm.js*
    - *src/components/SignupForm.js*

## Once Complete

Be sure to launch the app locally and test, and then deploy as per the Challenge instructions. Feel free to note in your README that the instructor provided code help on this challenge.