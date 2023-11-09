import { useApi } from 'hooks/api';
import { useEffect } from 'react';


export default () => {
  const [response, makerequest] = useApi.post(`/auth/signout`);

  useEffect(() => {

    makerequest()

    window.location.href = '/login'
  }, []);

  return <div>Signing out...</div>;
};