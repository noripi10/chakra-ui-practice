/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react'
import axios from 'axios'

import { UserProp } from '../types/api/user'
import { useMessage } from './useMessage'

const endPoint = () => `https://jsonplaceholder.typicode.com/users`

export const useUsers = () => {
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState<boolean>(false)
  const [users, setUsers] = useState<Array<UserProp>>([])

  const getAllUsers = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get<Array<UserProp>>(endPoint())
      const users = response.data

      setUsers(users)
    } catch (error) {
      showMessage({ title: error.message, status: 'error' })
    } finally {
      setLoading(false)
    }
  }, [])

  const updateUser = useCallback(
    (editUser: UserProp) => {
      const newUsers = users.map((user) => {
        if (user.id === editUser.id) {
          return editUser
        }
        return user
      })
      setUsers(newUsers)
    },
    [users]
  )

  return { loading, users, getAllUsers, updateUser }
}
