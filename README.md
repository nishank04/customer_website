# customer_website
Demo project for Saal.AI
To start the app:
1. Run **npm i** individualy by navigating to frontend and backend folder in terminal
2. then npm start in both front =end and backend
3. You can visit the app at http://localhost:3000/. client side server starts at http://localhost:3000
4. node server will be running at http://localhost:8080


Functionality - 
1. Have implemented the **crud** functionality of user(Adding, editing, deleting). 
  a. Data is saved in mongodb Customers collection is created in mongoD. After adding any new user and is retrieved from DB to the client once it has been added. 
  b. Editing the data is also updating the details of the user
2. You can **search** the user with the help of customer's name. **But first you need to add the users by clicking on add customer tab in navbar. Then they can be searched in the search input bar on the landing page.**
3. **Pagination** has been executed. To test the pagination you need to click on pagination tab in navbar. In this page the data is coming from the local mongoDB collection, if you are running the app locally for the first time, then you need to add the user first, which will add the user details in local mongoDB document setup.
**Or Else - In the file TablePagination.js (src/Components/TablePagination) file / component, comment line no 26(setData(response.data);) and uncomment line no 27(setData(altData);). This will stop the component to render the data from DB and will use the dummy json data from the json file.**
4. Have implemented **custom lightbox from scratch without any external lightbox library or packages in react. To see the lightbox functionality click on Gallery tab button on navigation bar.**
