import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
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

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    phone: undefined,
    usertype: "admin",
    isOnline: false,
    dateRegistered: Date.now,
    ranking: 0,
    country: 'KE',
    img: undefined,
    city: 'Nairobi',
    password: undefined,
    isAdmin: true,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" id="username"
                    onChange={handleChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email"  id="email" 
                    onChange={handleChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>+</CInputGroupText>
                    <CFormInput placeholder="Phone" autoComplete="phone"  id="phone"
                    onChange={handleChange}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" disabled={loading} onClick={handleClick}>
                     Create Account
                    </CButton>
                    {error && <span>{error.message}</span>}
                  </div>
                </CForm>
                <div style={{ marginTop: '10px' }}>
                  <CRow>
                    <CCol xs={12}>
                          <h6 className="text-medium-emphasis">Sign Up Using</h6>
                      </CCol>
                      <CCol xs={8}>
                        <CButton color="primary" className="px-4">
                        <CIcon icon={cibGoogle} className="me-2" />
                          Login with Google
                        </CButton>
                      </CCol>
                      <CCol xs={4} className="text-right">
                        <CButton color="link" className="px-0">
                          <CIcon icon={cibFacebook} size="xxl" />
                        </CButton>
                      </CCol>
                  </CRow>
                  </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
