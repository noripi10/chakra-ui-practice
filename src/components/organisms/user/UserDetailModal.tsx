import { memo, VFC } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'
import { UserProp } from '../../../types/api/user'

type Props = {
  isOpen: boolean
  onClose: () => void
  selectedUser: UserProp | null
}

export const UserDetailModal: VFC<Props> = memo(({ isOpen, onClose, selectedUser }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})
