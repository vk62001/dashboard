import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faEye, faEyeSlash, faLock, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavbarLogin } from "./Components/NavbarLogin"
import { Card } from "../../components/UI/Card"
import { Input } from "../../components/UI/Input"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setLogin } from "../../store/dataSlice/dataSlice"

export const LoginPage = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');

  //funcion login validando email y password
  const login = () => {
    if (!email.length || !email.length) {
      setMessageError('Por favor inserta tu correo y contraseña');
      return;
    }

    dispatch(setLogin(true));
  }


  return (
    <div className="w-screen h-screen bg-bigStone-950 splineRegular">
      <NavbarLogin />
      <div className="flex justify-center items-center w-full h-3/4 ">
        <Card
          className="w-6/12 border border-black shadow-md"
          title="Bienvenidos a tu plataforma"
          classTitle="text-gray-300 text-2xl splineBold"
        >
          <div className="flex ">
            <p className="text-gray-300 text-sm my-5">Por favor inserta tu cuenta</p>
          </div>
          <label className="text-gray-300 text-sm relative">Correo electrónico
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 absolute left-3 top-8 text-md" />
            <Input
              className="w-full"
              placeholder="Correo electrónico"
              value={email}
              onChange={setEmail}
              type="text"
              messageError={messageError}
            />
          </label>
          <div className="mb-10" />
          <label className="text-gray-300 text-sm relative">Contraseña
            <FontAwesomeIcon icon={faLock} className="text-gray-400 absolute left-3 top-8 text-md" />
            <Input
              type={!showPassword ? 'password' : 'string'}
              className="w-full"
              placeholder="Contraseña"
              value={password}
              messageError={messageError}
              onChange={setPassword}
            />
            <span className="absolute right-3 top-8 text-md cursor-pointer" onClick={() => setShowPassword(!showPassword)} >
            <FontAwesomeIcon 
              icon={!showPassword ? faEye : faEyeSlash} 
              className="text-gray-400" 
            />
            </span>
          </label>
          <div className="mb-2" />
          <Link to={'/register'} className="text-gray-400 text-sm">¿Olvidaste tu password? </Link>
          <div className="mb-10" />
          <Button className="bg-blue-500 text-gray-300" title="Iniciar sesión" onClick={login} />
          <p className="text-gray-400 text-right text-sm my-5">¿No tienes cuenta?</p>
          <Button className="bg-bigStone-700 text-gray-300" title="Registrate" onClick={() => { }} icon={faRightToBracket} />
        </Card>
      </div>
    </div>
  )
}
