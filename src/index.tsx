import React from 'react';
import ReactDOM from 'react-dom';

// components
import Logo from 'src/components/logo';
// assets
import 'src/assets/scss/style.scss';

function initApp() {
  const div = document.createElement('div');
  div.id = 'root';
  document.body.append(div);

  return div;
}

const node = initApp();

function App() {
  return (
    <div>
      <div>React Application</div>
      <Logo />
    </div>
  );
}


ReactDOM.render(<App />, node);