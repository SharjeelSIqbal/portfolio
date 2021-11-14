import { ChakraProvider } from "@chakra-ui/provider";
import { Component } from "react";
import Layout from '../components/layouts/main'

const Website = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider>
      <Layout router= {router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website;
