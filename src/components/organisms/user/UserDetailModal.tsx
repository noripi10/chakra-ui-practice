import { memo, VFC, useState, useEffect, ChangeEvent } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
} from '@chakra-ui/react'
import { UserProp } from '../../../types/api/user'
import { useLoginUser } from '../../../hooks/userLoginUser'

type Props = {
  isOpen: boolean
  onClose: () => void
  selectedUser: UserProp | null
  updateUser: (obj: UserProp) => void
}

export const UserDetailModal: VFC<Props> = memo(({ isOpen, onClose, selectedUser, updateUser }) => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { loginUser } = useLoginUser()
  const hasEdit: boolean = loginUser?.isAdmin ?? false

  const onEditUser = () => {
    if (selectedUser) {
      const editUser = {
        ...selectedUser,
        username,
        name,
        email,
        phone,
      }
      updateUser(editUser)
    }
    onClose()
  }

  useEffect(() => {
    setUsername(selectedUser?.username ?? '')
    setName(selectedUser?.name ?? '')
    setEmail(selectedUser?.email ?? '')
    setPhone(selectedUser?.phone ?? '')
  }, [selectedUser])

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
      <ModalOverlay>
        <ModalContent pb={3}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input
                  value={username}
                  readOnly={!hasEdit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setUsername(e.target.value)
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input
                  value={name}
                  readOnly={!hasEdit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input
                  value={email}
                  readOnly={!hasEdit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input
                  value={phone}
                  readOnly={!hasEdit}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPhone(e.target.value)
                  }}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {hasEdit && (
              <Button bg='darkblue' color='white' onClick={onEditUser}>
                編集確定
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})
