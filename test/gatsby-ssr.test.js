import { onPreRenderHTML } from '../src/gatsby-ssr';

describe("gatsby-plugin-ssr", () => {
    describe("onPreRenderHTML", () => {
        describe("in non production env", () => {
            test("does not set meta tag", () => {
                const getHeadComponents = jest.fn();
                onPreRenderHTML({ getHeadComponents, replaceHeadComponents });
                expect(getHeadComponents).not.toHaveBeenCalled();
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
                const getHeadComponents = jest.fn();
                options = Object.assign({}, options);
    
                onPreRenderHTML({ getHeadComponents }, options);
                return {
                    getHeadComponents
                };
            };
    
            it("set without clientId option", () => {
                const { getHeadComponents } = setup();
                expect(getHeadComponents).toHaveBeenCalledTimes(0);
            });
    
            it("set with clientId option", () => {
                const options = {
                    clientId: "idclient-000-jfjfjf"
                };
                const { getHeadComponents } = setup(
                    options
                );
                expect(getHeadComponents).toHaveBeenCalledTimes(1);
            });

                
            it("set with clientId and currency option", () => {
                const options = {
                    clientId: "idclient-000-jfjfjf",
                    currency: "EUR"
                };
                const { getHeadComponents } = setup(
                    options
                );
                expect(getHeadComponents).toHaveBeenCalledTimes(1);
            });
        });
    });
});