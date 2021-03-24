# ChangeCXStorefront
ChangeCX Storefront is based on VueStorefront connecting to various headless layers. 
## Introduction
ChangeCX Storefront models an end to end eCommerce PWA application based on VueStoreFront. The intent of ChangeCX Storefront is to abstract out complexities of headless connectors to various headless ecommerce platforms.


# How to start?
1)Configure packages/theme/nuxt.config.js to establish the connection to your Shopify store.
*domain: 'yourdomain.myshopify.com',
*storefrontAccessToken: 'your shopify store access token'

2) Install all required dependencies:
yarn install or yarn

3) (optional) Then you can verify if everything works properly by building all three projects:
yarn build

4) If everything built properly, you can start creating your new integration with:
yarn dev