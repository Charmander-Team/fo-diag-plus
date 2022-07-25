import authentication from "./../src/services/routes/authentication";
import {createContext, useState, useEffect} from "react";

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

  // Register Feature
  const registerUser = async (event, input) => {
    event.preventDefault();
    console.log("input", input)
    //const token = await authentication.byPostToken(input)
    //console.log("token",token)
    // if ( token ){
    //     setLogin(true)
    //     localStorage.setItem('tokenRefresh', token.refresh)
    //     localStorage.setItem('tokenAccess', token.access)
    //
    //     setConnection(false);
    //     setRegister(false);
    // }
  }


  //Process refresh

  useEffect(() => {
    const token = localStorage.getItem("tokenRefresh")
    const refresh = async () => {
      const response = await authentication.refresh(token)
      //console.log("response",response)
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

  let fieldTable = {
    lastname: "",
    firstname: "",
    mail: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
    weight: "",
    gender: "",
    origin: "",
    height: "",
    birthdate: "",
    tobacco: "",
    alcohol: "",
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.id === "lastname") {
      fieldTable.lastname = event.target.value
    }
    if (event.target.id === "firstname") {
      fieldTable.firstname = event.target.value
    }
    if (event.target.id === "mail") {
      fieldTable.mail = event.target.value
    }
    if (event.target.id === "password") {
      fieldTable.password = event.target.value
    }
    if (event.target.id === "phone") {
      fieldTable.phone = event.target.value
    }
    if (event.target.id === "address") {
      fieldTable.address = event.target.value
    }
    if (event.target.id === "city") {
      fieldTable.city = event.target.value
    }
    if (event.target.id === "zip") {
      fieldTable.zip = event.target.value
    }
    if (event.target.id === "weight") {
      fieldTable.weight = event.target.value
    }
    if (event.target.id === "height") {
      fieldTable.weight = event.target.value
    }
    if (event.target.id === "birthdate") {
      fieldTable.weight = event.target.value
    }
    if (event.target.id === "alcohol") {
      fieldTable.alcohol = event.target.value
    }
    if (event.target.id === "tobacco") {
      fieldTable.tobacco = event.target.value
    }
    if (event.target.id === "male") {
      fieldTable.gender = event.target.value
    } else {
      fieldTable.gender = "F"
    }
    if (event.target.id === "origin") {
      fieldTable.origin = event.target.value
    }
  }

  return (
    <AuthenticationContext.Provider value={{
      fieldTable,
      connectionClick,
      connection,
      registerClick,
      register,
      registerUser,
      resetState,
      handleChange,
      handleInputChange,
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
