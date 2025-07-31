import express from "express";
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Credit Card</title>
  <style>
 body {
 background-image: url("https://plus.unsplash.com/premium_photo-1673127327176-397f94c02bbc?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-height: 100vh;
  background-attachment: fixed; 
}
.card-container {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 500px;
  height: 500px;
}
.card {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 340px;
    height: 200px;
    padding: 20px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.040);
    border: 1px solid rgba(255, 255, 255, 0.50);
    border-radius: 10px;
    box-shadow: 0 0 80px rgba(207, 207, 207, 0.45);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transform: translate(0px, 0px) rotateX(50deg) rotateZ(-20deg);
    transition: all 1s;
    z-index: 4;
}
.card:hover {
      transform: translate(0px, -20px) rotateX(0deg) rotateZ(0deg);
      cursor: pointer;
}
.card h1 {
      color: white;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 20px;
}
.card h1:nth-of-type(2) {
        font-size: 16px;
        font-weight: 400;
        text-align: center;
}
.card h3 {
      color: white;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
}
.card h3:nth-of-type(2) {
        font-size: 14px;
        font-weight: 400;
}
.card i {
      margin-right: 5px;
      color: crimson;
}
.card .circle {
      position: absolute;
      margin: auto;
      top: 10%;
      bottom: 0;
      right: -50%;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.012);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: -2;
}
.card .circle:nth-of-type(2) {
        width: 100px;
        height: 100px;
        top: 90%;
        right: -20%;
        z-index: -1;
      background: rgba(255, 255, 255, 0.010);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
}
@media only screen and (max-width: 780px) {

  .card-container .card {
      width: 250px;
      height: 150px;
      animation: hvr 5s infinite ease-in-out;
      transition: none;
  }
  .card-container .card h1 {
        font-size: 18px;
  }
  .card-container .card h1:nth-of-type(2) {
          font-size: 14px;
  }
  .card-container .card h3 {
        font-size: 12px;
  }
  .card-container .card h3:nth-of-type(2) {
          font-size: 10px;
  }
  .card-container .card .circle {
        right: -70%;
  }

  @keyframes hvr {
    0% {
      box-shadow: -2px 2px 0px 0px #202020,
                  -10px 10px 40px 0px rgba(0, 0, 0, 0.3);
      transform: translate(0px, 0px) rotateX(30deg) rotateZ(-20deg);
    }
    50% {
      transform: translate(0px, -20px) rotateX(30deg) rotateZ(-20deg);;
      box-shadow: -2px 1px 0px 0px #202020,
                  -40px 40px 40px 0 rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: -2px 2px 0px 0px #202020,
                  -10px 10px 40px 0px rgba(0, 0, 0, 0.3);
      transform: translate(0px, 0px) rotateX(30deg) rotateZ(-20deg);
    }
  }
}
  </style>
</head>
<body>
 <div class="card-container">
  <div class="card">
    <h1>Credit Card</h1>
    <h1>2334 5467 8756 0932 1284</h1>
    <h3>Card holder</h3>
    <h3>Maqsud Alam</h3>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</div>
</body>
</html>`);
});

app.get("/contact", (req, res) => {
    res.send("<h1>This is Contact page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>This is About page</h1>");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});