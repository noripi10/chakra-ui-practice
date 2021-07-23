import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

export const useMessage = () => {
  const toast = useToast()

  const showMessage = useCallback(
    ({ title, status }: Props) => {
      toast({
        title,
        position: 'top',
        duration: 2000,
        isClosable: true,
        status,
      })
    },
    [toast]
  )

  return { showMessage }
}
