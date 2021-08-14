import { useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const { data } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  })
  
  return {
    isAuthorized: data !== undefined && data.authorizedUser !== null
  }
}

export default useAuthorizedUser