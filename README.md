# Backend
This is the backend for the diary app. This app allows users to create a login and enter diary entries that will be preserved across days and logins. The application allows for one entry every day and contains a rating system that can be visualized on a statistics page. It allows for anyone looking to keep track of their days to do so easily and reflect on days and months as a whole.

# Project Status

Azure Deployment: ![Badge](https://github.com/myDiarycp/backend/actions/workflows/azure-webapps-node.yml/badge.svg)


Bakend CI: ![Badge](https://github.com/myDiarycp/backend/actions/workflows/node.js.yml/badge.svg)


Server Website: [mydiarycp.azurewebsites.net](https://mydiarycp.azurewebsites.net)

# Diagrams

[Class Diagram Image](https://github.com/myDiarycp/backend/blob/main/ClassDiagram.png)

[Class Diagram File](https://github.com/myDiarycp/backend/blob/main/ClassDiagram.drawio)
Last Updated: 11/30/2022

[Use Case Diagram Image](https://github.com/myDiarycp/backend/blob/main/UseCase.png)

[Use Case Diagram File](https://github.com/myDiarycp/backend/blob/main/UseCase.drawio)
Last Updated: 12/02/2022 

# Enviroment Set Up:

1.) git clone https://github.com/myDiarycp/backend
2.) npm install express
3.) add the .env file with the MONGO_USER, MONGO_PWD, MONGO_DB, and MONGO_CLUSTER (reach out to other software developers for full .env file. It cannot be posted publicly to prevent security breaches)
4.) We need to install the following dependencies:
  - npm install "cors": "^2.8.5",
  - npm install "dotenv": "^16.0.3",
  - npm install "esbuild": "^0.15.13",
  - npm install "express": "^4.18.2",
  - npm install "jest": "^29.3.1",
  - npm install "mongoose": "^6.6.5",
  - npm install "webpack": "^5.74.0",
  - npm install "webpack-cli": "^4.10.0"
