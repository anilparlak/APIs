const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");


dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/',function(req,res){
 
  res.send(`
      <div style="display:flex; flex-direction:column;  align-items:center; height:100vh; width:100%;" >
          <h1> This API is made by Anıl Parlak for <em>E-commerce Website</em> </h1>
          <span> <b>for user register:</b> <em> https://nodejs-api-for-ecommerce.herokuapp.com/api/auth/register </em> </span>
          <span>body must include username password and email</span>
          <br>
          <span> <b>for user login:</b>  <em>https://nodejs-api-for-ecommerce.herokuapp.com/api/auth/login </em></span>
          <span>body must include username password</span>
          <br>
          <span> <b>for put user info:</b>  <em>https://nodejs-api-for-ecommerce.herokuapp.com/api/users/:id</em></span>
          <span>body must include changing  info which is wanted</span>
          <span> headers must include token key and key value Bearer + token(like jwt) </span> 
          <br>
          <span> <b>for delete user:</b>  <em>https://nodejs-api-for-ecommerce.herokuapp.com/api/users/</em></span>
          <span> headers must include token key and key value Bearer + admin token(like jwt) </span> <br>
          
      </div>
  `)
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute );
app.use("/api/products", productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log(`backend is runnig on port: ${process.env.PORT}`);
});
