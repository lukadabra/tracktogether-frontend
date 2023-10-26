import { useEffect, useState } from 'react'
import { User } from "../types/index";
import { backendFetcher } from '../../../utils/backEndAxios'

export const UserProvider = () => {
  const [user, setUser] = useState(undefined as User | undefined);
  console.log('user provider');
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await backendFetcher.get(`/auth/login/success`)
        setUser(res.data.user)
      } catch (error) {
        throw new Error("Error fetching user");
      }
    }
    getUser();
  }, [])

  return user
}