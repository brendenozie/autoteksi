import React, { useContext, Suspense, useState,useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import { AuthContext } from './context/AuthContext'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App() {
  // const [user, setUser] = useState(null);
  

  const { loading, error, dispatch } = useContext(AuthContext);

  useEffect(() => {
    
    const getUser = () => {
      fetch("/api/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          // setUser(resObject.user);
          dispatch({ type: "LOGIN_SUCCESS", payload: resObject.user })
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: "LOGIN_FAILURE",
            payload: { message: "You are not allowed!" },
          });
        });
    };
    getUser();
  }, []);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user) {
      return <Navigate to="/login" />
    }

    return children
  }
  
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route
            path="*"
            name="Home"
            element={
              <ProtectedRoute>
                <DefaultLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
