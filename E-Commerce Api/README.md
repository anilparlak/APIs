Prepared for e-commerce website using Node.js and Express.js
For detailed information or to ask a question, contact me

npm install

npm start

Some URLs: 

for user register: https://locallhost:5000/api/auth/register
body must include username password and email

for user login: https://locallhost:5000/api/auth/login
body must include username password

for put user info: https://locallhost:5000/api/users/:id
body must include changing info which is wanted
headers must include token key and key value Bearer + token(like jwt)

for delete user: https://locallhost:5000/api/users/
headers must include token key and key value Bearer + admin token(like jwt)