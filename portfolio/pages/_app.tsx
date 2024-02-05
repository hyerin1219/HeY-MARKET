// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from "@emotion/react";
import Layout from '../src/components/commons/layout'
import ApolloSetting from '../src/components/commons/apollo'
import { globalStyles } from '../src/commons/styles/globalStyles'

export default function App({ Component} : AppProps) {

  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component/>
        </Layout>
      </>
    </ApolloSetting>
    
  )
  
}
