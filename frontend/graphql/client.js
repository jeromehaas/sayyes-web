import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network',
		},
	},
});

export default client;
