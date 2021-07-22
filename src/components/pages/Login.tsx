import { memo } from 'react'
import { Button } from '@chakra-ui/react'

export const Login: React.VFC = memo(() => {
  return (
    <div>
      <p>ログインページ</p>
      <Button colorScheme='facebook'>ログイン</Button>
    </div>
  )
})
