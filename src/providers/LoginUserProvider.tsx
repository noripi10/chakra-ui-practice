import { createContext, Dispatch, ReactNode, SetStateAction, useState, VFC } from 'react'
import { UserProp } from '../types/api/user'

type LoginUserProps = UserProp & { isAdmin: boolean }

export type LoginUserContextType = {
  loginUser: LoginUserProps | null
  setLoginUser: Dispatch<SetStateAction<LoginUserProps | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

type Props = {
  children: ReactNode
}
export const LoginUserProvider: VFC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<LoginUserProps | null>(null)

  return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>
}
