import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../api/users/users";

export default function useUsersHook() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {
    users: data?.users || [],
    count: data?.count || 0,
    isLoading,
    error,
  };
}