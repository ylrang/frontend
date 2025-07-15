import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import { TreeProvider } from './store/TreeContext';
// import { AuthContextProvider } from './store/AuthContext';
import { Provider as AuthProvider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <AuthProvider store={store}>
          <TreeProvider>
            <App />
          </TreeProvider>
        </AuthProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);