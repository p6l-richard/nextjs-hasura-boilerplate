import { ApolloProvider } from "@apollo/client";
import Layout from "components/Layout";
import { useApollo } from "lib/apolloClient";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useState } from "react";
import ISession from "types/session";
import { QueryClient, QueryClientProvider } from "react-query";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const { session }: { session: ISession } = pageProps;
  const apolloClient = useApollo(pageProps.initialApolloState, session?.token);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NextAuthProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ApolloProvider client={apolloClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </QueryClientProvider>
      </NextAuthProvider>
    </>
  );
};

export default App;
