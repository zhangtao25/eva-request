import {css} from "@emotion/react";
import { Allotment } from "allotment";
import HttpRequest from "./components/http/Request";
import 'allotment/dist/style.css'
import 'antd/dist/antd.css'

const EvaRequestComponent = () => {
  return <div css={css`color: rebeccapurple`}>
      <Allotment
          css={css`
          height: calc(100vh - 74px);
        `}
          vertical={true}
      >
          <Allotment.Pane
              preferredSize={400}
          >
              <HttpRequest></HttpRequest>
          </Allotment.Pane>

          <Allotment.Pane
              preferredSize={400}
          >
              res
          </Allotment.Pane>
      </Allotment>

  </div>
}

export default EvaRequestComponent