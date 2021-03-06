import { memo, VFC, ReactNode } from 'react'
import { Header } from '../organisms/layout/Header'

type Props = {
  children: ReactNode
}

export const HeaderLayout: VFC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
})
