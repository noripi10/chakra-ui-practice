import { useHistory } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
export const NotFound: React.VFC = () => {
  const history = useHistory()

  return (
    <div>
      <p>404 ページが見つかりません</p>
      <Button colorScheme='facebook' onClick={() => history.push('/')}>
        homeへ
      </Button>
    </div>
  )
}
