import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        }
    }
});
const client = new ApolloClient({
    // uri: "https://countries.trevorblades.com",
    // // uri: "https://api.github.com/graphql",
    // cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;