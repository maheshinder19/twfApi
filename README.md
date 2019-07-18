# twfApi


# Documentation 

The api is running at : [https://twfapi.herokuapp.com/](https://twfapi.herokuapp.com/)


# Format of input
In order to get the result from the api, one need to make a get request to [https://twfapi.herokuapp.com/order](https://twfapi.herokuapp.com/).
The format of the request body will be an object with an array named order that has details of the products ordered.
**For example**, if an order consists of a "A" product, 2 "D" products and 2 "G" products. So request body will look like:

    {
    	"order" :	[ 
    		  { "name": "A", "qty": 1, "weight": 3 },
    		  { "name": "D", "qty": 2, "weight": 12 },
    		  { "name": "G", "qty": 2, "weight": 0.5 }]
    }




## Example
I have used postman to make a get request to the api.
![postman](https://i.ibb.co/7rzfRZL/postman.png)

The response is as follows:
![enter image description here](https://i.ibb.co/ry9Vtgw/response.png)


## To run on local machine
 - ***In order to run the code on local machine, clone the repo, install the dependencies and run `npm start` in the root directory of the
   repo.***
   
 - ***The api will take requests on localhost:3000.***
 - ***Make a get request to localhost:3000/order to get the result in the above explained format.***
