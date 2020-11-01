import React from 'react';

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {

    if (process.env.NODE_ENV !== `production`) {
        return null;
    }

    if (!pluginOptions.clientId) {
        return null;
    }

    let src = `https://www.paypal.com/sdk/js?client-id=${pluginOptions.clientId}`

    if (pluginOptions.currency) {
        src = src + `&currency=${pluginOptions.currency}`
    } else {
        src = src + `&currency=USD`
    }

    const sdkPaypal = (
        <script key="paypal-script" src={src} data-sdk-integration-source="button-factory"></script>
    );

    setHeadComponents([sdkPaypal]);
};