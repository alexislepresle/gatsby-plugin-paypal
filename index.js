import React, { useEffect } from 'react';

const Paypal = (
  createOrder,
  onApprove,
  onCancel,
  onError,
  onSuccess,
  style = {},
  currency,
  options,
  amount,
  shippingPreference,
  catchError,
  createSubscription,
) => {

  const createOrderPaypal = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: currency
              ? currency
              : options && options.currency
                ? options.currency
                : "USD",
            value: amount.toString()
          }
        }
      ],
      application_context: {
        shipping_preference: shippingPreference
      }
    });
  }
  const onApprovePaypal = (data, actions) => {
    return actions.order
      .capture()
      .then((details) => {
        if (onSuccess) {
          return onSuccess(details, data);
        }
      })
      .catch((err) => {
        if (catchError) {
          return catchError(err);
        }
      });
  }

  const onErrorPaypal = (err) => {
    console.log(err);
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.paypal
        .Buttons({
          ...props,
          createOrder: (createOrder ? createOrder : createOrderPaypal),
          onApprove: (onSuccess ? onApprove: onApprovePaypal),
          onError: (onError ? onError : onErrorPaypal)
        })
        .render('#paypal-button');
    }
  }, []);

  return (
    <div id="smart-button-container">
      <div>
        <div id="paypal-button" style={style}></div>
      </div>
    </div>
  );
};

export default Paypal;