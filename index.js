import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Guys</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About me</h1><p>Hi, I am Aman</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My Contacts</h1><p>Email : amankumarsingh31032002@gmail.com</p><p>Phone no. : 7225970922</p>");
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});















// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });