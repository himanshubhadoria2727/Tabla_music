import { AuthClient } from "@/HOC/client"

export const subcriptionapi = () => {

    return AuthClient().get("/api/plan/getplan")
}