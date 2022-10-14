import {css} from "@emotion/react";
import { Allotment } from "allotment";
import HttpRequest from "./components/http/Request";
import 'allotment/dist/style.css'
import 'antd/dist/antd.css'
import HttpRequestOptions from "./components/http/RequestOptions";
import {createContext, useReducer} from "react";
import _ from 'lodash';
import HttpResponse from "./components/http/Response";
import './locales/i18n'



export const HttpContext = createContext({});

const defaultState = {
    endpoint: '',
    method: '',
    rawParamsBody: '',
    request: {
        preRequestScript: '',
        v: '1',
        headers: [],
        name: 'updatePet',
        body: {
            contentType: 'application/json',
            body: '',
        },
        testScript: '',
        method: 'PUT',
        auth: {
            authURL: 'http://petstore.swagger.io/api/oauth/dialog',
            oidcDiscoveryURL: '',
            accessTokenURL: '',
            clientID: '',
            scope: 'write:pets read:pets',
            token: '',
            authType: 'oauth-2',
            authActive: true,
        },
        endpoint: '<<baseUrl>>/pet',
        params: [],
    },
    response: {
        type: 'success',
        headers: [],
        statuscode: 200,
        body: '',
        meta: {
            responseSize: 0,
            responseDuration: 1,
        },
        error: {
            name: '',
            message: '',
            stack: '',
        },
    },
};

function reducer(state = defaultState, action) {
    function underline(str) {
        return str.replace(/\B([A-Z])/g, '_$1').toLowerCase();
    }
    const clonestate = JSON.parse(JSON.stringify(state));

    const arr = underline(action.type).split('_');

    _.set(clonestate, arr.slice(1, arr.length).join('.'), action.payload);
    return clonestate;
}







const EvaRequestComponent = () => {

    const [store, dispatch] = useReducer(reducer, defaultState); //创建reducer

    const data = {"_id":"633ac99c3dfa7510a140c53c","endpoint":"{{url}}/passwordLogin","method":"POST","params":[{"key":"name","value":"zt","active":true},{"key":"age","value":"18","active":true}],"headers":[],"body":{"body":"{\n  \"username\": \"zt\",\n  \"password\":\"zt\"\n}","contentType":"","_id":"633ac99c3dfa7510a140c53d"},"createdAt":"2022-10-03T11:38:04.592Z","__v":0}
  return     <HttpContext.Provider value={{ store, dispatch }}>
      <Allotment
          css={css`
          height: calc(100vh - 300px);
        `}
          vertical={true}
      >
          <Allotment.Pane
              preferredSize={400}
          >
              <HttpRequest></HttpRequest>
              <HttpRequestOptions data={data}></HttpRequestOptions>
          </Allotment.Pane>

          <Allotment.Pane
              preferredSize={400}
          >
              <HttpResponse/>
          </Allotment.Pane>
      </Allotment>

  </HttpContext.Provider>
}

export default EvaRequestComponent