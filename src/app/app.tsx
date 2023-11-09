import { useApi } from 'hooks/api';
import MainRoutes from '../routes/routes'
import { useEffect } from 'react';


const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [response] = useApi.get(`/auth/currentuser`);
  const { data: currentUser } = response;

  useEffect(()=>{
    if(currentUser){
      
    }
  }, [currentUser])

  return (

    <main>
      <MainRoutes currentUser={currentUser} />
    </main>
    
  )
}

export default App
