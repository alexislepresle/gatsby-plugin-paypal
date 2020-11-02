[![npm package](https://badge.fury.io/js/react-smart-payment-buttons.svg)](https://www.npmjs.com/package/gatsby-plugin-paypal/)
[![npm downloads](https://img.shields.io/npm/dm/react-smart-payment-buttons.svg)](https://www.npmjs.com/package/gatsby-plugin-paypal/)

<p align="center">
    <img alt="Gatsby-Shopify-theme" src="https://github.com/alexislepresle/gatsby-plugin-paypal/raw/master/resources/gatsby-paypal.png" width="250" />
</p>

# gatsby-plugin-paypal

Add a PayPal Smart Payment Buttons to your Gatsby website easily.

## Install

`npm install --save gatsby-plugin-paypal`

## How to use Paypal plugin

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

Your PayPal Client ID.
You will find it on: https://developer.paypal.com/developer/applications/

### `currency`

The currency of the transaction.	

## How to Use Paypal component

This is what a component using gatsby-plugin-paypal might look like:

```js
import React from "react"
import Paypal from "gatsby-plugin-paypal"

const PaylpalButton = () => (
    <Paypal 
      style={{
        shape: 'rect',
        color: 'blue',
        layout: 'horizontal',
        label: 'paypal',
      }}
      amount={10.1}
      currency="EUR"
    />
)

export default PaylpalButton
```

## Additional props of Paypal component


| Name                      | Type                      | Description                                                                                        |
| ------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------- |
| `amount`                  | `string`                  | The amount value of the transaction.                                                               |
| `currency`                | `string`                  | The PayPal JavaScript SDK defaults to `USD`                                                        |
| `createOrder`             | `(data, actions) => any`  | See [createOrder](https://developer.paypal.com/docs/checkout/integrate/#5-capture-the-transaction) |
| `onApprove`               | `(data, actions) => any`  | See [onApprove](https://developer.paypal.com/docs/checkout/integration-features/funding-failure/)  |
| `onSuccess`               | `function`                | See [createOrder](https://developer.paypal.com/docs/checkout/integrate/#5-capture-the-transaction) |
| `onError`                 | `(error) => any`          | See[onError](https://developer.paypal.com/docs/checkout/integration-features/handle-errors)        |
| `onCancel`                | `(data) => any`           | See[onCancel](https://developer.paypal.com/docs/checkout/integration-features/cancellation-page/)  |
| `shippingPreference`      | `string`                  | (soon)                                                                                             |
| `catchError`              | `function`                | (soon)                                                                                             |
| `createSubscription`      | `function`                | (soon)                                                                                             |
| `style`                   | `object`                  | See[Customize the PayPal Buttons](https://developer.paypal.com/docs/checkout/integration-features/customize-button) |


## Contribution

[Pull requests](https://github.com/alexislepresle/gatsby-plugin-paypal/pulls)
