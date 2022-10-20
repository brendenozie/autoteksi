import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibGoogle, cilLockLocked, cilUser } from '@coreui/icons'
import axios from "axios"
import { AuthContext } from "../../../context/AuthContext"

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", credentials)
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })

        navigate("/")
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  }

  const google = () => {
    window.open("/api/auth/google", "_self");
  };

  const github = () => {
    window.open("/api/auth/github", "_self");
  };

  const facebook = () => {
    window.open("/api/auth/facebook", "_self");
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" id="username" autoComplete="username" onChange={handleChange}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        id="password"
                        placeholder="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow className="justify-content-center">
                      <CCol xs={6}>        
                        <CButton color="primary" className="px-4" disabled={loading} onClick={handleClick}>
                          Login
                        </CButton>
                        {error && <span>{error.message}</span>}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  <div>
                  <CRow xs={{ gutterY: 2 }}>
                    <CCol xs={12}>
                      <h6 className="text-medium-emphasis">Sign In Using</h6>
                    </CCol>
                    <CCol xs={8}>
                      {/* <Link to="/auth/google"> */}
                        <CButton color="primary" className="px-4" onClick={google}>
                          <CIcon icon={cibGoogle} className="me-2" /> Login with Google
                        </CButton>
                      {/* </Link> */}
                    </CCol>
                    <CCol xs={4} className="text-right">
                      <Link to="/auth/google">
                        <CButton color="link" className="px-0" >
                          <CIcon icon={cibFacebook} size="xxl" />
                        </CButton>
                      </Link>
                    </CCol>
                  </CRow>
                  </div>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      A few clicks away from managing your own taxi fleet.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
