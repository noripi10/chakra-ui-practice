import { memo, VFC, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  disabled?: boolean
  loading?: boolean
  onClick: () => Promise<void>
}

export const PrimaryButton: VFC<Props> = memo(({ children, onClick, disabled = false, loading = false }) => {
  return (
    <Button
      disabled={disabled}
      isLoading={loading}
      loadingText={'ログイン処理中...'}
      bg='blue.700'
      color='white'
      _hover={{ opacity: 0.9 }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
