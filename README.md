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

# Data Models

## Authentication

### Register

* A __POST__ request to the `/register` endpoint expects to recieve an object as follows: 

```javascript
{
    "username": "username",
    "email": "email@address.com",
    "password": "password",
    "phone": "15555555555",
    "birthdate": "01/24/1990"
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| username     | String    |  true      | true       |
| email        | String    |  true      | true       |
| password     | String    |  true      | false      |
| phone        | String    |  false     | true       |
| birthdate    | Date      |  true      | false      |

## Users

* A __GET__ request to the `/users` endpoint will return an object as follows: 

```javascript
[
    {
        "id": 1,
        "username": "username",
        "email": "email@address.com",
        "password": "password",
        "phone": "15555555555",
        "birthdate": "01/24/1990"
    },
    {
        "id": 2,
        "username": "username",
        "email": "email@address.com",
        "password": "password",
        "phone": "15555555555",
        "birthdate": "01/24/1990"
    }
]
```

## Posts

* A __GET__ request to the `/posts` endpoint will return an object containing all messages in database as follows:

```javascript
[
    {
        "id": 2,
        "post": "another test post",
        "created_at": "2019-07-20 02:54:53",
        "updated_at": "2019-07-20 02:54:53",
        "user_id": 1
    },
    {
        "id": 1,
        "post": "test post",
        "created_at": "2019-07-20 02:54:41",
        "updated_at": "2019-07-20 02:54:41",
        "user_id": 2
    }
]
```

* A __POST__ request to the `/posts` endpoint will expect to recieve an object as follows:

```javascript
{
    "user_id": 2
    "post": "This is a post"
}
```

* A __GET__ request to the `/posts/:id` endpoint will return an object containing the post matching that ID: 

```javascript
{
    "id": 2,
    "post": "another test post",
    "created_at": "2019-07-20 02:54:53",
    "updated_at": "2019-07-20 02:54:53",
    "user_id": 1
}
```

* A __PUT__ request to the `posts/:id` will expect to recieve an object as follows:

```javascript

{
    "user_id": 1
    "body": "Updated message"
}

```

__NOTE:__ An object only containing the changed field is required, if the field is to remain the same it is not needed.

* A __DELETE__ request to the `/posts/:id` will return the number of posts deleted (1 means it was deleted successfully)

* A __GET__ request to the `/posts/user/:id` endpoint will return an object containing all posts by the user with the id: 

```javascript

[
    {
        "id": 2,
        "post": "another test post",
        "created_at": "2019-07-20 02:54:53",
        "updated_at": "2019-07-20 02:54:53",
        "user_id": 1
    },
    {
        "id": 3,
        "post": "this is an edited post",
        "created_at": "2019-07-20 03:17:14",
        "updated_at": "2019-07-20 03:17:14",
        "user_id": 1
    }
]

```