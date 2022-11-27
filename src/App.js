import styles from './App.module.css';
import ProfileList from './components/profile/ProfileList';
import { AiFillGithub } from 'react-icons/ai';

function App() {
  return (
    <div>
      <ProfileList />
      <AiFillGithub />
    </div>
  );
}

export default App;
