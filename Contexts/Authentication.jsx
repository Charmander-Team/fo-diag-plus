import authentication from "./../src/services/routes/authentication";
import {createContext, useState, useEffect} from "react";
import usersApi from "../src/services/routes/usersApi";
import Router from "next/router";

const AuthenticationContext = createContext();


const AuthenticationWrapper = ({children}) => {

  const [isLogged, setIsLogged] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [tokenState, setTokenState] = useState(null)

  // Disconnect Feature
  const logoutClick = (event) => {
    event.preventDefault()
    Router.push("/");
    setIsLogged(false)
    localStorage.removeItem('tokenRefresh')
    localStorage.removeItem('tokenAccess')
  }

  // Connect Feature
  const connectUser = async (event, credentials) => {
    event.preventDefault()
    const token = await authentication.generateToken(credentials);

    if (token && token.length !== 0 ) {
      setTokenState(token)
      setIsLogged(true)
      localStorage.setItem('tokenRefresh', token.refresh)
      localStorage.setItem('tokenAccess', token.access)

      const getUserInfo = await usersApi.getUser(token);
      setUserInfo(getUserInfo);

      setConnection(false);
      setRegister(false);
    }
  }

  // Register User Feature
  const registerUser = async (event, userInfos) => {
    event.preventDefault();
    const creation = await usersApi.createUser(userInfos)

    if (creation && creation.length !== 0) {
      // To reset Authentication State
      setConnection(false);
      setRegister(false);
    }
  }

  // Update User Feature
  const updateUser = async (event, token, newUserInfos) => {
    event.preventDefault();

    const update = await usersApi.updateUser(token, newUserInfos)
    if (update && update.length !== 0) {
      console.log("UPDATE OK")
    }
  }

  // Refresh Feature
  useEffect(() => {
    const token = localStorage.getItem("tokenRefresh")
    const refresh = async () => {
      const response = await authentication.refresh(token)
      if (response.code !== "token_not_valid") {
        localStorage.setItem("tokenAccess", response.access)
        setIsLogged(true)
      } else {
        setIsLogged(false)
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

  const resetAuthenticationState = () => {
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

  const updateInputValues = (event, oldUserInfos) => {
    event.preventDefault();
    if (event.target.id === "lastname") {
      oldUserInfos.last_name = event.target.value
    }
    if (event.target.id === "firstname") {
      oldUserInfos.first_name = event.target.value
    }
    if (event.target.id === "mail") {
      oldUserInfos.email = event.target.value
    }
    if (event.target.id === "password") {
      oldUserInfos.password = event.target.value
    }
    if (event.target.id === "phone") {
      oldUserInfos.telephone = event.target.value
    }
    if (event.target.id === "address") {
      oldUserInfos.address = event.target.value
    }
    if (event.target.id === "city") {
      oldUserInfos.city = event.target.value
    }
    if (event.target.id === "zip") {
      oldUserInfos.zipcode = event.target.value
    }
    if (event.target.id === "weight") {
      oldUserInfos.weight = event.target.value
    }
    if (event.target.id === "height") {
      oldUserInfos.height = event.target.value
    }
    if (event.target.id === "birthdate") {
      oldUserInfos.birthdate = event.target.value
    }
    if (event.target.id === "alcohol") {
      event.target.value === "true" ? oldUserInfos.alcohol = true : null
    }
    if (event.target.id === "tobacco") {
      event.target.value === "true" ? oldUserInfos.smoking = true : null
    }
    if (event.target.id === "male") {
      oldUserInfos.gender = event.target.value
    } else {
      oldUserInfos.gender = "F"
    }
    if (event.target.id === "origin") {
      oldUserInfos.origin = event.target.value
    }
  }


  return (
    <AuthenticationContext.Provider value={{
      formattedInputValues,
      connectionClick,
      connection,
      registerClick,
      register,
      registerUser,
      updateUser,
      resetAuthenticationState,
      handleChange,
      loadInputValues,
      updateInputValues,
      connectUser,
      isLogged,
      tokenState,
      userInfo,
      logoutClick
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationWrapper};
export default AuthenticationContext;
