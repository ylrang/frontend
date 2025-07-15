import useAuth from "./useAuth"
import useAxiosPrivate from "./useAxiosPrivate"

export default function useUser() {
    const { setUser } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()

    async function getUser() {
        try {
            const { data } = await axiosPrivateInstance.get('user')
            console.log("User data: ", data)
            setUser(data)
            
        } catch (error) {
            console.log(error.response)
        }
    }

    return getUser
}