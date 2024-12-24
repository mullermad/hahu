export default function (query, id) {
  const { onResult, loading, onError, refetch } = useQuery(query, () => ({
    id,
  }));

  return {
    onResult,
    loading,
    refetch,
    onError,
  };
}
