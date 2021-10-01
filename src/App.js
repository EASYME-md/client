import './App.css';

import Title from './components/Title';
import Editor from './components/Editor';
import Preview from './components/Preview';
import SharingButton from './components/SharingButton';

const App = () => {
  return (
    <>
      <SharingButton />
      <Title />
      <Editor />
      <Preview />
    </>
  );
};

export default App;
