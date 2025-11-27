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
- [x] Redirect to blogs pages

## Add All Blogs page

- [x] Move catalog.hbs to blogs folder
- [x] Add route in `blogController`
- [x] Render blogs
  - [x] Update blogService with `find()`

## Add Details page

- [x] Move details.hbs to blogs folder
- [x] Add route in `blogController`
- [x] Update blogService with `findById()`
- [x] Add blog Creator to DB collection object upon creation
- [x] Show details for clicked blog
- [x] Handle follower section

## Delete action

- [x] Create delete function at service
- [x] Update blogController with delete request

  - [x] Validate delete action (only from owner)

  ## Edit action

- [x] Render Edit view
- [x] Update placehoders in view
- [x] Add Edit service
- [x] Add post edit action to controller
  - [x] validate owner
- [x] Redirect to current nimal details page

## Setup home page

- [x] Render blogs
- [x] Show No blogs if DB is empty
- [x] Show only last 3 posts

## Setup follow functionality

- [x] Update Blog model
- [x] Disable follow button for guest users
- [x] Allow "follow/already followed" for logged in users

## Error handling

- [x] Hanlde register page
- [x] Validate user upon registration (if exists)
- [x] Handle login page
- [x] Handle add blog page

## Setup Profile page

- [x] Render page
- [x] Update user information
- [x] Update data for cteated blogs and cteated blogs number
- [x] Update data for followed blogs and followed blogs number
