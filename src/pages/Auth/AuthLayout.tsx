import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <>
      <div>Картинка на странице Входа</div>
      <div>
        <h1>Ту будут появляться формы</h1>
        <Outlet />
      </div>
    </>
  );
}

// На месте Outlet рендерится children из маршрута
