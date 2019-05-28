import React, { Component } from 'react';
import { AuthButton, LogButton, Section } from './styled';
import authContext from '../auth-context';

class Auth extends Component {
  render() {
    return (
      <authContext.Consumer>    
        {({status, login, logout}) => {
            let buttonToDisplay = status ? (
              <Section>
                <LogButton onClick={logout}>
                  Cerrar Sesión
                </LogButton>
              </Section>
            ) : (
              <Section>
                <AuthButton onClick={login}>
                  Iniciar sesión
                </AuthButton>
              </Section>
            )
            return buttonToDisplay;
          }
        }      
      </authContext.Consumer>
    );
  }
}

export default Auth;
