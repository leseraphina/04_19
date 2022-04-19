import React from 'react';
import ReactDOM from 'react-dom/client';
// import Effect01 from './effect/effec01'
// import Effect02 from './effect/effec02'
import Effect03 from './effect/effect03'

function App(){
  return (
    <div>
      <Effect03 />
    </div>
  )
}

const root = document.querySelector('#root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

