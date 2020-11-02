import React, { useEffect } from 'react';
import PropTypes from "prop-types";

const Paypal = (props) => {

  console.log(props)

  const createOrderPaypal = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: props.currency
              ? props.currency
              : props.currency
                ? props.currency
                : "USD",
            value: props.amount.toString()
          }
        }
      ],
      application_context: {
        shipping_preference: props.shippingPreference
      }
    });
  }
  const onApprovePaypal = (data, actions) => {
    return actions.order
      .capture()
      .then((details) => {
        if (props.onSuccess) {
          return onSuccess(details, data);
        }
      })
      .catch((err) => {
        if (props.catchError) {
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
          createOrder: (props.createOrder ? props.createOrder : createOrderPaypal),
          onApprove: (props.onApprove ? props.onApprove: onApprovePaypal),
          onError: (props.onError ? props.onError : onErrorPaypal),
        })
        .render('#paypal-button');
    }
  }, []);

  return (
    <div id="smart-button-container">
      <div>
        <div id="paypal-button"></div>
      </div>
    </div>
  );
};

Paypal.propTypes = {
  amount: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
  ]),
  currency: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
  ]),
  shippingPreference: PropTypes.string,
  onSuccess: PropTypes.func,
  catchError: PropTypes.func,
  onError: PropTypes.func,
  createOrder: PropTypes.func,
  createSubscription: PropTypes.func,
  onApprove: PropTypes.func,
  style: PropTypes.object,
};
Paypal.defaultProps = {
  style: {},
  shippingPreference: "GET_FROM_FILE",
};

export default Paypal;

