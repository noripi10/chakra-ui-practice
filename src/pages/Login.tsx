import { memo, useState, useCallback, ChangeEvent } from 'react'
import { Flex, Box, Heading, Divider, Input, Stack } from '@chakra-ui/react'
import { PrimaryButton } from '../components/atoms/button/PrimaryButton'
import { useAuth } from '../hooks/useAuth'

export const Login: React.VFC = memo(() => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState<string>('')

  const onChangeUserId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }, [])

  const onLogin = async () => {
    await login(userId)
  }
  return (
    <Flex justify='center' align='center' height='100vh'>
      <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
        <Heading as='h1' size='md' textAlign='center'>
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder='ユーザーID' value={userId} onChange={onChangeUserId} />
          <PrimaryButton loading={loading} disabled={userId === '' || loading} onClick={onLogin}>
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})
