// import { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export const Settings: React.VFC = () => {
  const history = useHistory()
  return (
    <div>
      <p>設定画面</p>
      <Button onClick={() => history.push('/')}>homeへ</Button>
    </div>
  )
}
