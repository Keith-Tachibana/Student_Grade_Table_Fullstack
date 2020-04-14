# Student Grade Table
A simple CRUD (Create, Read, Update, Delete), full-stack web application to create, read, update, and delete student grades
## Technologies Used
|                 Dependency          |    Version    |
|-------------------------------------|--------------:|
| @Babel/Core                         |     7.8.7     |
| @Babel/Plugin-Transform-React-JSX   |     7.8.3     |
| Babel-Loader                        |     8.0.6     |
| Bootstrap                           |     4.4.1     |
| CORS                                |     2.8.5     | 
| Express                             |     4.17.1    |
| FontAwesome                         |     5.11.2    |
| PG                                  |     7.18.2    |
| React                               |    16.13.0    |
| React-DOM                           |    16.13.0    |
| Webpack                             |     4.42.0    |
| Webpack-CLI                         |     3.3.11    |
## Live Demo
Try the application live on [my porftolio website](https://www.keith-tachibana.com/portfolio/studentGradeTable/server/public/index.html)
## Features
- _*_ Teachers can view a list of recorded grades
- _*_ Teachers can view the average grade for the class
- _*_ Teachers can add a grade to the table
- _*_ Teachers can delete a grade from the table
- _*_ Teachers can edit the student name, course name, or student grade from the table
## Preview
![Student Grade Table Preview](preview.gif "Student Grade Table Preview")
## Development
#### System Requirements
|    Requirement    |       Version       |
|-------------------|--------------------:|
| Nginx             |   1.10 or higher    |
| Node              |    10 or higher     |
| NPM               |     6 or higher     |
| PM2               |     4 or higher     |
| PostgreSQL        |    10 or higher     |
| Ubuntu Server     |     18.04 LTS       |
#### Getting Started
1. Clone the repoistory
  ```shell
  git clone https://github.com/Keith-Tachibana/Student_Grade_Table_Fullstack.git
  ```
2. Change directory to cloned folder
  ```shell
  cd Student_Grade_Table_Fullstack/
  ```
3. Install all dependencies with NPM
  ```shell
  npm install
  ```
4. Start PostgreSQL server
  ```shell
  sudo service postgresql start
  ```
5. Create the database
  ```shell
  createdb studentGradeTable
  ```
6. Import the schema
  ```shell
  psql -d studentGradeTable -f schema.sql
  ```
7. Import the example data
  ```shell
  psql -d studentGradeTable -f data.sql
  ```
8. Edit your nginx default site configuration to reverse proxy the Express.js server
  ```shell
  cd /etc/nginx/sites-available
  sudo nano default
  ```
   - 8a. In the "server" code block, add this underneath the first location definition:
        ```shell
        location /api {
          proxy_pass http://127.0.0.1:3000;
        }
        ```
   - 8b. Save your changes (`Ctrl + O`) and exit (`Ctrl + X`)
   - 8c. Link your default site to the sites-enabled directory (if not already done):
        ```shell
        sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
        ```
9. Start nginx
  ```shell
  sudo service nginx start
  ```
10. Transpile React components using Webpack
  ```shell
  npm run build
  ```
11. Change directory to the server folder
  ```shell
  cd server/
  ```
12. Start the Express.js server using the PM2 module
  ```shell
  sudo pm2 --name "studentGradeTable" start index.js
  ```
13. Open your default web browser and navigate to http://localhost:3000/ to see the result!
