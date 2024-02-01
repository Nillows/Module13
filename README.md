
# E-Commerce Data Back End

## Description 
This project is a plug and play back end to create, read, update, and destroy information in an integrated MySQL database with pre-built routes to attach to your front end!

## [Video Link](https://streamable.com/gy8r0u)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
1. Run `npm i` to install the dependent node packages.
2. Rename the .env.example file to .env
3. Input your personal MySQL details in the `root` and `password` variables in the .env file.
4. Establish the database by logging into your mysql instance by typing `mysql -u (username) -p (password)` in your Terminal.
5. Run the command `source db/schema.sql` from the project root folder in your Terminal.
6. Exit mysql by typing `exit` in your Terminal
7. Seed the new database by running `npm run seed` in your Terminal.
8. Launch the App by running 'node server.js' from the root folder in your Terminal.

## Usage 
Once the App has launched you will be able be able to send GET/POST/PUT & DELETE queries utilizing the below format.

### Category Routes
- **Get all categories**: `GET http://localhost:3001/api/categories`
- **Get a single category by ID**: `GET http://localhost:3001/api/categories/:id` (Replace `:id` with the actual category ID)
- **Create a new category**: `POST http://localhost:3001/api/categories` (Include `category_name` in the request body)
- **Update a category by ID**: `PUT http://localhost:3001/api/categories/:id` (Replace `:id` with the actual category ID and include updated `category_name` in the request body)
- **Delete a category by ID**: `DELETE http://localhost:3001/api/categories/:id` (Replace `:id` with the actual category ID)

### Product Routes
- **Get all products**: `GET http://localhost:3001/api/products`
- **Get a single product by ID**: `GET http://localhost:3001/api/products/:id` (Replace `:id` with the actual product ID)
- **Create a new product**: `POST http://localhost:3001/api/products` (Include product details like `product_name`, `price`, `stock`, and `tagIds` in the request body)
- **Update a product by ID**: `PUT http://localhost:3001/api/products/:id` (Replace `:id` with the actual product ID and include the updated product details in the request body)
- **Delete a product by ID**: `DELETE http://localhost:3001/api/products/:id` (Replace `:id` with the actual product ID)

### Tag Routes
- **Get all tags**: `GET http://localhost:3001/api/tags`
- **Get a single tag by ID**: `GET http://localhost:3001/api/tags/:id` (Replace `:id` with the actual tag ID)
- **Create a new tag**: `POST http://localhost:3001/api/tags` (Include `tag_name` in the request body)
- **Update a tag by ID**: `PUT http://localhost:3001/api/tags/:id` (Replace `:id` with the actual tag ID and include updated `tag_name` in the request body)
- **Delete a tag by ID**: `DELETE http://localhost:3001/api/tags/:id` (Replace `:id` with the actual tag ID)


## Credits
Nillows

## License
This project is covered under the MIT license.

## Features
1. View all or one Categories
2. Create New Categories
3. Update Existing Categories
4. Delete Categories
5. View all or one Products
6. Create New Products
7. Update Existing Products
8. Delete Products
9. View all or one Product Tags
10. Create New Product Tags
11. Update Existing Product Tags
12. Delete Product Tags
   

## How to Contribute
Paypal

## Tests
N/A

## Questions
Find me on GitHub: [Nillows](https://github.com/Nillows)
Email me with any questions: thomwollin@gmail.com
