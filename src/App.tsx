import React, { useReducer } from 'react';
import { InitialStyles } from './utils/Styled';
import { reducer, initialState, DispatchCtx, StateCtx } from './store/store';
import Layout from './components/ui/Layout';
import Calculator from './components/Calculator';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchCtx.Provider value={dispatch}>
      <StateCtx.Provider value={state}>
        <InitialStyles />
        <Layout>
          <Calculator />
        </Layout>
      </StateCtx.Provider>
    </DispatchCtx.Provider>
  );
}

export default App;
