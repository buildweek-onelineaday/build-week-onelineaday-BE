# build-week-onelineaday-be

# Overview

This API is used as part of the application __One Line a Day__ and allows for CRUD operations to
be performed on both on the application's __users__ and __posts__.

This documentation will cover all of the data models and endpoints which can be access via
> <https://pt-one-line-a-day.herokuapp.com/>

# Endpoints

## Authentication

| Request Type | Endpoint      | Description   |
|:------------:|:-------------:|:-------------:|
| POST         | /register | Creates User  |
| POST         | /login    | Creates JWT*  |

* JSON Web Tokens Used to Verify Users

## Users

| Request Type | Endpoint       | Description           |
|:------------:|:--------------:|:---------------------:|
| GET          | /users         | Return All Users      |

## Posts

| Request Type | Endpoint          | Description                   |
|:------------:|:-----------------:|:-----------------------------:|
| GET          | /posts            | Return All Messages           |
| POST         | /posts            | Create New Message            |
| GET          | /posts/:id        | Return Post Info By ID        |
| PUT          | /posts/:id        | Update Post Info By ID        |
| DELETE       | /posts/:id        | Remove Post By ID             |
| GET          | /posts/user/:id   | Return All Posts By User Id   |