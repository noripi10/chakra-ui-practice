import { useCallback, useState } from 'react'

import { UserProp } from '../types/api/user'

type Props = {
  id: number
  users: Array<UserProp>
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<UserProp | null>(null)

  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const target = users.find((user) => user.id === id)
    setSelectedUser(target || null)
    onOpen()
  }, [])

  return { selectedUser, onSelectUser }
}
