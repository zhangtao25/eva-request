import { css } from '@emotion/react';
import { Allotment } from 'allotment';
import { Button, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { useState } from 'react';

import EvaRequestComponent from './lib';

function App() {
  const [locale, setLocale] = useState('en');

  function createRequestService() {}

  function updateRequestService() {
    return new Promise((resolve, reject) => {

      setTimeout(()=>{
        resolve(123)
      },300)
    })
  }

  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <div
          css={css`
            height: 48px;
            background-color: white;
            border-bottom: 1px solid darkgray;
          `}
        >
          <Button
            onClick={() => {
              setLocale(locale === 'cn' ? 'en' : 'cn');
            }}
          >
            按钮
          </Button>
        </div>

        <Allotment
          css={css`
            height: calc(100vh - 48px);
          `}
        >
          <Allotment.Pane preferredSize={400}>左侧集合列表</Allotment.Pane>

          <Allotment.Pane>
            <EvaRequestComponent
              locale={locale}
              updateRequest={updateRequestService}
              createRequest={createRequestService}
            />
          </Allotment.Pane>
        </Allotment>
      </ConfigProvider>
    </div>
  );
}

export default App;
