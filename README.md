# [In the process of creation]


# gatsby-plugin-paypal


Add a paypal sell button to your Gatsby site.

## Install

`npm install --save gatsby-plugin-paypal`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: `YOUR_CLIENT_ID`,
        currently: `EUR` // Optional
      }
    }
  ]
};
```

## Options

### `clientId`


### `currently`

