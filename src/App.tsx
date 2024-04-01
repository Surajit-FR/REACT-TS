import AuthRoutes from './routes/Auth.routes';
import PageRoutes from './routes/Page.routes';

const App = (): JSX.Element => {
  return (
    <>
      <AuthRoutes />
      <PageRoutes />
    </>
  )
}

export default App
