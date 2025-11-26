# nodeJS_exam_prep_2

## Project Setup

- [x] initialize project & setup debuging
- [x] install & config Express
- [x] install & config Mongoose (MongoDB)
  - [x] Add error hander for failed connection
- [x] add resources
- [x] install & config Handlebars & static files
- [x] render homePage

## App initial setups

- [x] create layout
- [x] add homeController
- [x] create routes
- [x] update home
- [x] render blogs

## Register functionality

- [x] Add new controller `authController`
  - [x] update routes
    - [x] login
    - [x] register
- [x] add urlencoded() to index
- [x] Add User model
  - [x] Add password hashing
- [x] Add User service
- [x] Fix Register.hbs
- [x] Handle registration (create user in database)
- [x] RePassword must match

## Login functionality

- [x] Genearte view
- [x] Validate user
- [x] Validate password
- [x] Create token
  - [x] create .env with secret
  - [x] create tokenUtils
- [x] Install cookie parser
- [x] Return token to client
- [x] Automatic login on register

## Logout functionality

- [x] Add logout action
- [x] Clear cookie

## Authorization

- [x] Add `authMiddleware`
  - [x] If no token => `next();`
  - [x] try to decode token, attach to request & add isAuhtnticated
  - [x] catch errors -> clear cookie & redirect
- [x] Add isAuth route guard
- [x] Add isGuest route guard
- [x] Assign guards to `authController`

Add animal page

- [] Fix create.html & update form
- [] Render add animal page
  - [] Add animal controller
  - [] Add route to routes.js
- [] Add animal model
- [] Add animal service & save animal collection to database
- [] Redirect to dashboard page
- [] Add required validations to model
