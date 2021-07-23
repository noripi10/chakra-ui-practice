/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'

import { UserCard } from '../components/organisms/user/UserCard'
import { useUsers } from '../hooks/useUsers'
import { UserDetailModal } from '../components/organisms/user/UserDetailModal'
import { useSelectUser } from '../hooks/useSelectUser'

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { loading, users, getAllUsers } = useUsers()
  const { selectedUser, onSelectUser } = useSelectUser()

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen })
  }, [])

  useEffect(() => {
    getAllUsers()
  }, [])

  if (loading) {
    return (
      <Center h='100vh'>
        <Spinner />
      </Center>
    )
  }

  return (
    <>
      <Wrap p={{ base: 4, md: 10 }} justify='center' align='center' spacing='10'>
        {users &&
          users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                imageUrl='https://source.unsplash.com/random'
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
      </Wrap>
      <UserDetailModal isOpen={isOpen} onClose={onClose} selectedUser={selectedUser} />
    </>
  )
})
