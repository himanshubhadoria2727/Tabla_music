import { AuthClient } from "@/HOC/client"


export const allContent = () => {
    return AuthClient().get('/api/content/allContent')
}

export const deletedcontent = (id) => {
    return AuthClient().delete(`/api/content/${id}`)
}