import React, {useEffect} from 'react';

const Paypal = ({ 
    style={}       
 }) => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{ "amount": { "currency_code": "USD", "value": 1 } }]
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
    }

    const onError = (err) => {
        console.log(err);
    }

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.paypal
            .Buttons({
                createOrder,
                onApprove,
                onError,
                
            })
            .render('#paypal-button');
        }
    }, []);

    return (
        <div id="smart-button-container">
            <div style="text-align: center;">
                <div id="paypal-button" style={style}></div>
            </div>
        </div>
    );
};

export default Paypal;
/*

<div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD" data-sdk-integration-source="button-factory"></script>
  <script>
            function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',

        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script>

  <div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  <script src="https://www.paypal.com/sdk/js?client-id=sb&currency=CHF" data-sdk-integration-source="button-factory"></script>
  <script>
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'checkout',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"description":"dsfderg","amount":{"currency_code":"CHF","value":2.1,"breakdown":{"item_total":{"currency_code":"CHF","value":1},"shipping":{"currency_code":"CHF","value":1},"tax_total":{"currency_code":"CHF","value":0.1}}}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();
  </script>

  */