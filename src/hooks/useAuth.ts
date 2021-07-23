import { useCallback, useState } from 'react'
import axios from 'axios'

import { UserProp } from '../types/api/user'
import { useHistory } from 'react-router-dom'
import { useMessage } from './useMessage'

const endPoint = (id: string) => `https://jsonplaceholder.typicode.com/users/${id}`

export const useAuth = () => {
  const { showMessage } = useMessage()
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (id: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.get<Promise<UserProp>>(endPoint(id))
      const user = response.data

      if (user && Object.keys(user).length) {
        showMessage({ title: 'ログインに成功しました', status: 'success' })
        history.push('/home')
        // 本来はreplaceでログイン画面を再起させないようにするべき
        // history.replace('/home')
      } else {
        showMessage({ title: 'ユーザーIDが見つかりません', status: 'warning' })
      }
    } catch (error) {
      showMessage({ title: error.message, status: 'error' })
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { login, loading }
}
