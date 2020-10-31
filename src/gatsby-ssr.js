
export const onPreRenderHTML = (
    { reporter, getHeadComponents, replaceHeadComponents, pathname },
    pluginOptions
) => {
    if (process.env.NODE_ENV !== `production`) {
        reporter.warn("non production environment");
        return null;
    }

    if (!pluginOptions.clientId) {
        reporter.warn(
            `Client ID is not defined, add it to your gatsby-config.js file.`
        );
        return null;
    }

    const headComponents = getHeadComponents();

    let src = `https://www.paypal.com/sdk/js?client-id=${pluginOptions.clientId}`

    if (pluginOptions.currency) {
        src = src+`&currency=${pluginOptions.currency}`
    }else{
        src = src+`&currency=USD`
    }

    const sdkPaypal = (
        <script src={src} data-sdk-integration-source="button-factory"></script>
    );

    headComponents.push(sdkPaypal);
    replaceHeadComponents(headComponents);
};