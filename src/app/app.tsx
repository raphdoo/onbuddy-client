import { useApi } from "hooks/api";
import MainRoutes from "../routes/routes";

const App = () => {
  const [response] = useApi.get(`/auth/currentuser`);
  const { data: currentUser, isLoading } = response;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <MainRoutes currentUser={currentUser} />
    </main>
  );
};

export default App;
