import {Outlet} from 'react-router-dom';

const Layouts = () => {
  return (
    <main className="max-h-screen overflow-y-hidden">
      <Outlet/>
    </main>
  );
};

export default Layouts;
