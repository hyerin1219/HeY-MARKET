import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client"; // module 요즘
import { createUploadLink } from 'apollo-upload-client'
import { result } from "lodash";
import { useEffect } from "react";
import { accessTokensState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {

  const [ accessToken, setAccessToken] = useRecoilState(accessTokensState)

  useEffect(() => {
    const result = localStorage.getItem("accessToken")
    setAccessToken(result ?? "")
  },[])

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
