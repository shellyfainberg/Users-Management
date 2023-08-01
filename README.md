# User-Management

APIs
### GET: /user
Returns the list of all the users.

### GET: /user/:id
Given a user id and returns all his details.

### GET: /user/:id/tasks
Returns all user's tasks.

### PUT:/id
Given user id and update his details

### PUT:/:id/tasks/:taskId
Given the user id and his task id and update it (change the task to completed)
 
### POST :/
Add a new user.

### POST:/:id
Given user id and add him a task.

### POST:/:id/post
Given user id and add him a post.

### DELETE:/id
Given user id and delete him.

Postman:
Example: send GET to http://localhost:8000/user





