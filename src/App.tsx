import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import ThirdParty from "supertokens-auth-react/recipe/thirdparty";
import Session from "supertokens-auth-react/recipe/session";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { ThirdPartyPreBuiltUI } from "supertokens-auth-react/recipe/thirdparty/prebuiltui";
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
    appInfo: {
        appName: "track-together",
        apiDomain: "https://tracktogetherbackend-fbb1--5000--1f9496ab.local-credentialless.webcontainer.io",
        websiteDomain: "https://tracktogetherfrontend-oysd--5173--1f9496ab.local-credentialless.webcontainer.io",
    },
    recipeList: [
        ThirdParty.init({
            signInAndUpFeature: {
                providers: [
                  {
                    id: "Deezer",
                    name: "Deezer", // Will display "Continue with X"

                    // optional
                    // you do not need to add a click handler to this as
                    // we add it for you automatically.
                    buttonComponent: (props: {name: string}) => <div style={{
                        cursor: "pointer",
                        border: "1",
                        backgroundColor: "#333",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        borderRadius: "5px",
                        borderStyle: "solid"
                    }}>{"Login with " + props.name}</div>
                  },
                  {
                    id: "Spotify",
                    name: "Spotify", // Will display "Continue with X"

                    // optional
                    // you do not need to add a click handler to this as
                    // we add it for you automatically.
                    buttonComponent: (props: {name: string}) => <div style={{
                        cursor: "pointer",
                        border: "1",
                        paddingTop: "5px",
                        backgroundColor: "#333",
                        paddingBottom: "5px",
                        borderRadius: "5px",
                        borderStyle: "solid"
                    }}>{"Login with " + props.name}</div>
                  }
                ]
            }
        }),
        Session.init()
    ]
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SuperTokensWrapper>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <BrowserRouter>
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyPreBuiltUI])}
          </Routes>
        </BrowserRouter>
      </SuperTokensWrapper>
    </>
  )
}

export default App
