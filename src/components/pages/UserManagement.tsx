// import { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export const UserManagement: React.VFC = () => {
  const history = useHistory()

  return (
    <div>
      <p>ユーザーマネジメントページ</p>
      <Button onClick={() => history.push('/')}>homeへ</Button>
    </div>
  )
}
