import React, { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Viewer from './Viewer';
import makePDF from './makePDF';

const defaultValue = makePDF
  .toString()
  .split('\n')
  .slice(1, -1)
  .join('\n')
  .replace(/^ {2}/gm, '');

function App() {
  const [value, setValue] = useState(defaultValue);

  const onChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <h1>PDFKit Browser Demo (built with <a href="https://create-react-app.dev/">create-react-app</a>)</h1>
      <p><a href="http://pdfkit.org/">Website</a> | <a href="http://github.com/foliojs/pdfkit">Github</a></p>
      <Editor value={value} onChange={onChange} />
      <Viewer value={value} />
    </>
  );
}

export default App;