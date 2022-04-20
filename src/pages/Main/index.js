import { Provider } from '../../context/userContext';
import UsersList from '../../components/UsersList';
import UsersRegister from '../../components/UsersRegister';
import './styles.css';

export default function Main(){
    
  return (

    <Provider>


    <div className="container-main">

      <UsersRegister/>

      <UsersList/>

    </div>
    </Provider>
  );
}
