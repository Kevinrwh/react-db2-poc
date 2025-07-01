import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;