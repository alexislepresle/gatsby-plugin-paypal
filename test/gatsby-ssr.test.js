import { onRenderBody } from '../src/gatsby-ssr';

describe("gatsby-plugin-ssr", () => {
    describe("onPreRenderHTML", () => {
        describe("in non production env", () => {
            test("does not set meta tag", () => {
                const setHeadComponents = jest.fn();
                onRenderBody({ setHeadComponents });
                expect(setHeadComponents).not.toHaveBeenCalled();
            });
        });
        describe("in production env", () => {
            let env;
            beforeAll(() => {
                env = process.env.NODE_ENV;
                process.env.NODE_ENV = `production`;
            });
            afterAll(() => {
                process.env.NODE_ENV = env;
            });
            const setup = options => {
                const setHeadComponents = jest.fn();
                options = Object.assign({}, options);
    
                onRenderBody({ setHeadComponents }, options);
                return {
                    setHeadComponents
                };
            };

    
            it("set with clientId option", () => {
                const options = {
                    clientId: "idclient-000-jfjfjf"
                };
                const { setHeadComponents } = setup(
                    options
                );
                expect(setHeadComponents).toHaveBeenCalledTimes(1);
            });

                
            it("set with clientId and currency option", () => {
                const options = {
                    clientId: "idclient-000-jfjfjf",
                    currency: "EUR"
                };
                const { setHeadComponents } = setup(
                    options
                );
                expect(setHeadComponents).toHaveBeenCalledTimes(1);
            });
        });
    });
});