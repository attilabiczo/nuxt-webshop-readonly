# Simple Webshop

The project was implemented using Nuxt 3 in Vite @node16

## Setup

Make sure to install the dependencies:

npm install --legacy-peer-deps

### Development Server

Start the development server on http://localhost:3000:

npm run dev

### Running tests

Run the vitest unit tests

There are example 

npm run test:unit

## Main architecture

Using a readonly products service (specified in environment configuration file) this app tries to simulate the main workflows of a simple webshop. 

Main features

- The application is responsive and usable on any device width and type
- It handles system dark mode changes, light and dark modes are also implemented
- Checkout button is in the header section to open cart page


Main features per page

### Dashboard
- Featured products, only a subset of the whole list. The See more button will open the products page
- A card show a product. At the top part of the card, there might be a notification regarding the minimum order amount and the number of items in the cart with calculated price and a remove icon
- The products can be added to the cart by clicking on the Buy link
- After putting a product into the cart the Buy link swotches to the inceremnt/decrement buttons with the number of selection
- If there is a minimum order amount field more than 1, the initial amount will be that number. In that case the decrease button will be disabled and the product could be removed from the cart only by using the remove icon mentioned above
- If the minimum order amount is 1 the decrease button could be used for removing the product from the cart
- Adding product to the cart decreases the available number of item. If there is no more items left the increase button will be disabled

### Products
- Lists all the products, product specific features are the same as on the dashboard

### Cart
- Products in the cart can be still changed here (there are the same decrease/increase and a remove from cart button)
- Shows the total price for all the products considering all the order amounts