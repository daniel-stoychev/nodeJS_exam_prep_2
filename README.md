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

## Add Create blog page

- [x] Fix create.html & update form
- [x] Render Create blog page
  - [x] Add blog controller
  - [x] Add route to routes.js
- [x] Add blog model
- [x] Add required validations to model
- [x] Add blog service & save blog collection to database
- [x] Add owner ID
- [] Redirect to newly created blogs to page

## Add All Blogs page

- [] Move catalog.hbs to blogs folder
- [] Add route in `blogController`
- [] Render blogs

  - [] Update blogService with `find()`

- []

## Setup home page

- [] Render blogs
- [] Show No blogs if DB is empty
