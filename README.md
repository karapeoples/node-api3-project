# Full-Stack Web App Practice

---

#### Using Lambda Node API 3 Project and Built FrontEnd with some Redux and Local State

- You can post/edit/delete a user
- You can also post/edit/delete a Journal Comment
- The backend data will only persist 8 hours and reset as it is being deployed on heroku

1. FrontEnd Application

-

2. Backend Application~~ RestAPI ~~ See Chart for Endpoints

-

|      Endpoints       | Method |               Other               |
| :------------------: | :----: | :-------------------------------: |
|      /api/users      |  GET   |       Gets a List of Users        |
|     /api/user:id     |  GET   |         Gets a User By Id         |
|      /api/users      |  POST  |            Adds a User            |
|    /api/users/:id    |  PUT   |           Edits a User            |
|    /api/users/:id    | DELETE |          Deletes a User           |
|      /api/posts      |  GET   |       Gets a List of Posts        |
|    /api/posts/:id    |  GET   |         Gets a Post by Id         |
|    /api/posts/:id    |  PUT   |           Edits a Post            |
|    /api/posts/:id    | DELETE |          Deletes a Post           |
| /api/users/:id/posts |  GET   | Gets all Posts from a Single User |
| /api/users/:id/posts |  POST  |            Adds a Post            |
