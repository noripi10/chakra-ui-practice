/* eslint-disable react-hooks/exhaustive-deps */
import { memo, VFC, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'

import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  const onClickHome = useCallback(() => {
    history.push('/home')
  }, [])
  const onClickUserManagement = useCallback(() => {
    history.push('/home/user-management')
  }, [])
  const onClickSetting = useCallback(() => {
    history.push('/home/settings')
  }, [])

  return (
    <>
      <Flex as='nav' bg='blue.900' color='green.50' align='center' justify='space-between' padding={{ base: 3, md: 5 }}>
        <Flex align='center' as='a' _hover={{ cursor: 'pointer' }} flexGrow={1}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }} onClick={onClickHome}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex align='center' fontSize='small' display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton {...{ onOpen }} />
      </Flex>
      <MenuDrawer {...{ isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting }} />
    </>
  )
})
