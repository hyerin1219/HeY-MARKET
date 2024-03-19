// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global } from "@emotion/react";
import Layout from '../src/components/commons/layout'
import ApolloSetting from '../src/components/commons/apollo'
import { globalStyles } from '../src/commons/styles/globalStyles'
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps} : AppProps):JSX.Element {

  return (
    <RecoilRoot>
      <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </>
    </ApolloSetting>
    </RecoilRoot>
    
    
  )
  
}
