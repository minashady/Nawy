# Nawy Next.js simple listing apartments app

## Technology used
This web application was build with Next.js:

- MongoDB as our NoSQL database
- ExpressJS as our NodeJS wrapper
- NextJS for our view library
- NodeJS for server-side JS runtime enviroment

Additional libraries used:
- Axios - promise-based http client
- mongoose - Object Document Mapper (ODM) of choice
- Our dependencies and their verison :
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-slot": "^1.0.2",
    "axios": "^1.6.8",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "embla-carousel-autoplay": "^8.0.0",
    "embla-carousel-react": "^8.0.0",
    "express": "^4.19.1",
    "lucide-react": "^0.363.0",
    "mongodb": "^6.5.0",
    "mongoose": "^8.2.3",
    "next": "^14.1.4",
    "react": "^18",
    "react-dom": "^18",
    "tailwind-merge": "^2.2.2",
    "tailwindcss-animate": "^1.0.7"
## Link to video

-Link
https://drive.google.com/file/d/1u8xPDz9QczgtmbUJBtFOlLZcok3q_Xd1/view?usp=sharing

## Docker
Docker file included and shoud run simply 

1.  In your terminal from folder navigate to

         /my-app
2.  Run this command (Docker and docker-compose must be installed on your machine)

        docker-compose up
  

## Installation for manual start up

- Make sure you have [NodeJS](https://nodejs.org/en/) installed on your machine

  You can check by running

         node -v

  in your terminal to make sure NodeJS is setup correctly
  - Make sure to include .env file in the backend directory

### required installations:
1.  In your terminal from folder navigate to

         /my-app

2.  Install required packages by running

         npm i

### How to run the frontend:

1.  In your terminal from folder navigate to

         /my-app


2.  Install required packages by running

         npm i

3.  Spin up the development server using

          npm run dev

    open your browser at http://localhost:3000

### How to run the backend:

1.  In your terminal from folder navigate to

         /my-app

2.  Install nodemon by running

         npm run node_start


    It will run on http://localhost:3100


## API reference
As we use query for all our require(s) from the server we have included screenshots with the included query requirements for all functions referenced 

### /apartments

1.  /getApartments (get) 

    Request query
![image](https://github.com/minashady/assets/blob/main/apartmentListing.png)


2.  /createApartment (post)
    
    Request query
     ![image](https://github.com/minashady/assets/blob/main/apartmentCreation.png)

3. /apartmentDetails (post)
    Request query
      ![image](https://github.com/minashady/assets/blob/main/apartmentDetails.png)



## Tests

- Postman can be used to test the functionality of different API endpoints make sure to attach bearer token if endpoint requires token

- Any browser can be used to test the functionality of the frontend webpages and web compenents


## Credits

Mina Shady
