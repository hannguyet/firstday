import React from 'react';
import PublicLayout from '../../layout/PublicLayout';
import LoginContainer from '../../containers/Login';
import LoginWrapper from './styles';

export default function Login() {
  return (
    <PublicLayout>
      <LoginWrapper>
        <LoginContainer />
      </LoginWrapper>
    </PublicLayout>
  );
}
