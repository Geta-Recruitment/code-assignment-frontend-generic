# Frontend Developer Assignment

## Intro

We are excited to have you here! Below you will find few tasks for frontend developer position. Time in parenthesis for each task indicates optimal time you should be spending on each of them. Please push all your changes to the `main` branch.

When you have completed the tasks, please assign pull request to Agnese (@AgneseAlksne) and also send an e-mail to recruitment@getadigital.com.

We wish you good luck!

Ps. We are working on improving the tasks. If you have any suggestions, please let us know!

## Instructions

### Setup

1. Install dependencies.

   `npm install`

2. Start server and client applications.

   `npm run dev`

3. Start devving =)

### Part 1 (Homework)

1. Build product list page.
2. Build product details page.
3. Build shopping cart component.

// TODO: add design sketch

### Part 2 (Pair programming)

Implement the shopping cart system. Users should be able to add, remove, and update items in the cart. The cart should be persistent across page reloads and navigation.


## Resources

| Endpoint        | Description                                                     | Supported methods |
| --------------- | --------------------------------------------------------------- | ----------------- |
| `/products`     | Returns a list of products.                                     | `GET`             |
| `/products/:id` | Returns a single product.                                       | `GET`             |
| `/cart`         | `GET` returns the shopping cart. `POST` to add item(s) to cart. | `GET`, `POST`     |
| `/cart/:id`     | `PUT` to update cart item. `DELETE` to remove item from cart.   | `PUT`, `DELETE`   |
