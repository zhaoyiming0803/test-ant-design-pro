import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { AuthingGuard } from '@authing/react-ui-components'
// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css'


const Welcome: React.FC = () => {
  const appId = '61b04e9d9c7862a906c32355'
  const onLogin = (userInfo: any) => {
    console.log(userInfo)
  } 
  return (
    <PageContainer>
      <AuthingGuard appId={appId} onLogin={onLogin} />
    </PageContainer>
  );
};

export default Welcome;
