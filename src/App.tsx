import { useState } from 'react';
import EvaRequestComponent from './lib';
import { css } from '@emotion/react';
import { Button, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

function App() {
  const [locale, setLocale] = useState('en');
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Button
          onClick={() => {
            setLocale(locale === 'cn'?'en':'cn');
          }}
        >
          按钮
        </Button>
        <EvaRequestComponent locale={locale} />
      </ConfigProvider>
    </div>
  );
}

export default App;
