# middleman

# About The Project

The API supports basic CRUD operations with locally created JSON files. Depending on your needs, you may host this locally on your computer or in the cloud (Vercel, Firebase, AWS, render, etc.).

# Built With

<ul dir="auto">
<li><a href="https://expressjs.com/" rel="nofollow">Express - Node js</a></li>
</ul>

# Getting Started

<h3>Prerequisites</h3>

Download and install node.
<ul dir="auto">
  <li><a href="https://nodejs.org/" rel="nofollow">Node</a></li>
</ul>

Then install <a href="https://www.npmjs.com/" rel="nofollow">Node package manager</a> using the following command.

npm install npm@latest -g

<h3>Installation</h3>

1] Clone the repo: https://github.com/Yasasrm/middleman.git <br>
2] Open the terminal and navigate to the project folder. <br>
3] Then install <a href="https://expressjs.com/" rel="nofollow">express</a> using this command: <b>npm install express</b> <br>
4] To start API use this command: <b>node .</b> <br>
5] Now you can check API status from this link: http://localhost:8080/status <br>
6] You can find postman collection from <a href="https://github.com/Yasasrm/middleman/blob/main/middleman-api.postman_collection.json" rel="nofollow">here</a> <br>

$${\color{red}If \space\color{red}you \space\color{red}want \space\color{red}to \space\color{red}deploy \space\color{red}this \space\color{red}to \space\color{red}the \space\color{red}cloud \space\color{red}always \space\color{red}deploy \space\color{red}a \space\color{red}freshly \space\color{red}cloned \space\color{red}project.}$$

# Usage

 <ul dir="auto">
  <li>Hobbyists who are interested in IOT projects can use this API. The goal of this project is to provide a way to communicate your Android or iOS app with your Arduino/ESP32/ Raspberry-pi (etc.) based project.</li>
</ul>

# Example
1] Status <br>
<ul dir="auto">
  <li>Method: GET</li>
  <li>URI: http://localhost:8080/status</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/status.PNG" alt="Status Postman ScreenShot" style="max-width: 100%;"></a></p>

2] Create <br>
<ul dir="auto">
  <li>Method: POST</li>
  <li>URI: http://localhost:8080/db/create/{{Your_Colllection_Name}}</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/create.PNG" alt="Create record Postman ScreenShot" style="max-width: 100%;"></a></p>

3] Read All Records <br>
<ul dir="auto">
  <li>Method: GET</li>
  <li>URI: http://localhost:8080/db/read/{{Your_Colllection_Name}}</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/readAll.PNG" alt="Read all records Postman ScreenShot" style="max-width: 100%;"></a></p>

4] Read Single Record <br>
<ul dir="auto">
  <li>Method: GET</li>
  <li>URI: http://localhost:8080/db/read/{{Your_Colllection_Name}}/{{Your_Record_Id}}</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/read.PNG" alt="Read single record Postman ScreenShot" style="max-width: 100%;"></a></p>

5] Update Record <br>
<ul dir="auto">
  <li>Method: PUT</li>
  <li>URI: http://localhost:8080/db/update/{{Your_Colllection_Name}}/{{Your_id}}</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/update.PNG" alt="Update record Postman ScreenShot" style="max-width: 100%;"></a></p>

6] Delete Record <br>
<ul dir="auto">
  <li>Method: DELETE</li>
  <li>URI: http://localhost:8080/db/delete/{{Your_Colllection_Name}}/{{Your_Record_Id}}</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/delete.PNG" alt="Delete record Postman ScreenShot" style="max-width: 100%;"></a></p>

7] Delete Collection <br>
<ul dir="auto">
  <li>Method: DELETE</li>
  <li>URI: http://localhost:8080/db/delete/{{Your_Colllection_Name}}</li>
  <li>Sample:</li>
</ul>
<p dir="auto"><a href="#" rel="nofollow"><img src="https://github.com/Yasasrm/middleman/blob/main/screenshots/deleteAll.PNG" alt="Delete collection Postman ScreenShot" style="max-width: 100%;"></a></p>

# License
🤷‍♂️

# Contact

Yasas Maddunage - yasasrm@gmail.com
Project Link: https://github.com/Yasasrm/middleman



