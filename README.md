[![npm package](https://badge.fury.io/js/gatsby-plugin-paypal.svg)](https://www.npmjs.com/package/gatsby-plugin-paypal/)
[![npm downloads](https://img.shields.io/npm/dm/gatsby-plugin-paypal.svg)](https://www.npmjs.com/package/gatsby-plugin-paypal/)

<p align="center">
    <img alt="Gatsby-Paypal-Plugin" src="https://raw.githubusercontent.com/alexislepresle/gatsby-plugin-paypal/master/ressources/gatsby-paypal.png" width="400" />
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
        currency: `EUR`, // Optional
        vault: true // Optional
      }
    }
  ]
};
```

## Options

#### `clientId`

Your PayPal Client ID.
You will find it on: https://developer.paypal.com/developer/applications/

#### `currency`

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


| Name                      | Type                      | Description                                                                                        | Default        |
| ------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------- | -------------- |
| `amount`                  | `string`                  | The amount value of the transaction.                                                               |                |
| `currency`                | `string`                  | The currency of the transaction. The [three-character ISO-4217](https://developer.paypal.com/docs/integration/direct/rest/currency-codes/) currency code. PayPal does not support all currencies. **Warning: Uses the same value as declared in the plugin options**                                                                 | `USD`          |
| `createOrder`             | `(data, actions) => any`  | See [createOrder](https://developer.paypal.com/docs/checkout/integrate/#5-capture-the-transaction) |                |
| `onApprove`               | `(data, actions) => any`  | See [onApprove](https://developer.paypal.com/docs/checkout/integration-features/funding-failure/)  |                |             |
| `onError`                 | `(error) => any`          | See [onError](https://developer.paypal.com/docs/checkout/integration-features/handle-errors)       |                |
| `onCancel`                | `(data) => any`           | See [onCancel](https://developer.paypal.com/docs/checkout/integration-features/cancellation-page/) |                |
| `shippingPreference`      | `string`                  | The shipping preferences. The possible values are: -`NO_SHIPPING`:  Redact shipping address fields from the PayPal pages. Recommended for digital goods. - `GET_FROM_FILE` :  Use the buyer-selected shipping address. - `SET_PROVIDED_ADDRESS` :  Use the merchant-provided address. Buyer cannot change the address on the PayPal pages. If the merchant does not pass an address, the buyer can choose the address on PayPal pages.    | `GET_FROM_FILE`        |
| `createSubscription`      | `(data, actions) => any`                | See [createSubscription](https://developer.paypal.com/docs/subscriptions/integrate/#4-create-a-subscription)                                                                                        |
| `style`                   | `object`                  | See [Customize the PayPal Buttons](https://developer.paypal.com/docs/checkout/integration-features/customize-button) | `{}` |


## Contribution

[Pull requests](https://github.com/alexislepresle/gatsby-plugin-paypal/pulls)
