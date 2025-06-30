import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import storeAuth from '../context/storeAuth'
import storeProfile from '../context/storeProfile'

const Dashboard = () => {
  const location = useLocation()
  const urlActual = location.pathname
  const { clearToken } = storeAuth()
  const { user } = storeProfile()

  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className="relative min-h-screen bg-gray-100">
      {menuVisible && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 px-5 py-4 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-200">Tutorías ESFOT</h2>
            <button onClick={() => setMenuVisible(false)} className="text-white text-xl">✖</button>
          </div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/036/608/non_2x/male-working-on-laptop-with-mask-cartoon-icon-illustration-people-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg"
            alt="img-client"
            className="m-auto mt-4 p-1 border-2 border-slate-500 rounded-full"
            width={120}
            height={120}
          />
          <p className="text-slate-400 text-center my-4 text-sm">
            <span className="bg-green-600 w-3 h-3 inline-block rounded-full"></span> Bienvenido - {user?.nombre}
          </p>
          <p className="text-slate-400 text-center my-4 text-sm">Rol - {user?.rol}</p>
          <hr className="mt-5 border-slate-500" />

          <ul className="mt-5">
            {[
              { to: '/dashboard', text: 'Perfil' },
              { to: '/dashboard/listar', text: 'Listar' },
              { to: '/dashboard/crear', text: 'Crear' },
              { to: '/dashboard/chat', text: 'Chat' },
            ].map(({ to, text }) => (
              <li key={to} className="text-center">
                <Link
                  to={to}
                  className={`${
                    urlActual === to
                      ? 'text-slate-200 bg-gray-900 px-3 py-2 rounded-md text-center'
                      : 'text-slate-600'
                  } text-xl block mt-2 hover:text-slate-600`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Barra superior */}
      <div className="bg-gray-900 py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="text-white text-2xl"
          title={menuVisible ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuVisible ? '✖' : '☰'}
        </button>
      </div>

    <div className="flex items-center gap-4">
      <span className="text-md font-semibold text-slate-100">
        Usuario - {user?.nombre}
      </span>
      <img
        src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
        alt="img-client"
        className="border-2 border-green-600 rounded-full"
        width={50}
        height={50}
      />
      <button
        className="text-white text-md hover:bg-red-900 bg-red-800 px-4 py-1 rounded-lg"
        onClick={clearToken}
      >
        Salir
      </button>
    </div>
  </div>


      {/* Contenido principal */}
      <div
        className={`p-8 overflow-y-auto h-[calc(100vh-96px)] transition-all duration-300 ${
            menuVisible ? 'ml-4' : ''
        }`}
        >
        <Outlet />
        </div>


      {/* Footer */}
      <div className="bg-gray-800 h-12">
        <p className="text-center text-slate-100 leading-[2.9rem] underline">
          ESFOT - Todos los derechos reservados
        </p>
      </div>
    </div>
  )
}

export default Dashboard

