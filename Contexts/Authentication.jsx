import authentication from "./../src/services/routes/authentication";
import {createContext, useState, useEffect} from "react";
import usersApi from "../src/services/routes/usersApi";

const AuthenticationContext = createContext();

const AuthenticationWrapper = ({children}) => {

  //Process deconnexion
  const logoutClick = (event) => {
    event.preventDefault()
    setLogin(false)
    localStorage.removeItem('tokenRefresh')
    localStorage.removeItem('tokenAccess')
  }

  // Process connexion début
  const [login, setLogin] = useState(false)
  const connectedUser = async (event, opts) => {
    event.preventDefault()
    const token = await authentication.byPostToken(opts)
    if (token) {
      setLogin(true)
      localStorage.setItem('tokenRefresh', token.refresh)
      localStorage.setItem('tokenAccess', token.access)

      setConnection(false);
      setRegister(false);
    }
  }
  // Process connexion fin

  // Register User Feature
  const registerUser = async (event, userInfos) => {
    event.preventDefault();
    await usersApi.createUser(userInfos)
  }


  //Process refresh

  useEffect(() => {
    const token = localStorage.getItem("tokenRefresh")
    const refresh = async () => {
      const response = await authentication.refresh(token)
      if (response.code !== "token_not_valid") {
        localStorage.setItem("tokenAccess", response.access)
        setLogin(true)
      } else {
        setLogin(false)
      }
    }

    if (token) {
      refresh()
    }

  }, [])

  const [connection, setConnection] = useState(false);
  const [register, setRegister] = useState(false);

  const connectionClick = () => {
    setConnection(true);
    setRegister(false);
  }

  const registerClick = () => {
    setConnection(false);
    setRegister(true);
  }

  const resetState = () => {
    setConnection(false);
    setRegister(false);
  }

  const handleChange = (event) => {
    if (event.target.value === "connexion") {
      connectionClick()
    }
    if (event.target.value === "inscription") {
      registerClick()
    }
  }

  let formattedInputValues = {
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    address: null,
    city: null,
    zipcode: null,
    telephone: null,
    date_joined: null,
    birthdate: null,
    gender: null,
    height: null,
    weight: null,
    origin: null,
    smoking: false,
    alcohol: false,
    role: null,
  }

  const loadInputValues = (event) => {
    event.preventDefault();
    if (event.target.id === "lastname") {
      formattedInputValues.last_name = event.target.value
    }
    if (event.target.id === "firstname") {
      formattedInputValues.first_name = event.target.value
    }
    if (event.target.id === "mail") {
      formattedInputValues.email = event.target.value
    }
    if (event.target.id === "password") {
      formattedInputValues.password = event.target.value
    }
    if (event.target.id === "phone") {
      formattedInputValues.telephone = event.target.value
    }
    if (event.target.id === "address") {
      formattedInputValues.address = event.target.value
    }
    if (event.target.id === "city") {
      formattedInputValues.city = event.target.value
    }
    if (event.target.id === "zip") {
      formattedInputValues.zipcode = event.target.value
    }
    if (event.target.id === "weight") {
      formattedInputValues.weight = event.target.value
    }
    if (event.target.id === "height") {
      formattedInputValues.height = event.target.value
    }
    if (event.target.id === "birthdate") {
      formattedInputValues.birthdate = event.target.value
    }
    if (event.target.id === "alcohol") {
      event.target.value === "true" ? formattedInputValues.alcohol = true : null
    }
    if (event.target.id === "tobacco") {
      event.target.value === "true" ? formattedInputValues.smoking = true : null
    }
    if (event.target.id === "male") {
      formattedInputValues.gender = event.target.value
    } else {
      formattedInputValues.gender = "F"
    }
    if (event.target.id === "origin") {
      formattedInputValues.origin = event.target.value
    }

    formattedInputValues.date_joined = "2022-07-26T11:22:23.514Z"

    formattedInputValues.role = "patient"
  }

  return (
    <AuthenticationContext.Provider value={{
      formattedInputValues,
      connectionClick,
      connection,
      registerClick,
      register,
      registerUser,
      resetState,
      handleChange,
      loadInputValues,
      connectedUser,
      login,
      logoutClick
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationWrapper};
export default AuthenticationContext;
