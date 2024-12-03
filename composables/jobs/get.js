const defaultOffset = ref(0);
const defaultLimit = ref(15);
const defaultFilter = ref({});

export default function (
  query,
  { limit = defaultLimit, offset = defaultOffset, filter = defaultFilter }
) {
  const { onResult, loading, onError, refetch } = useQuery(
    query,
    () => ({
      limit: limit?.value,
      offset: offset?.value,
      filter: filter?.value,
    }),
    () => ({
      fetchPolicy: "network-only",
    })
  );

  return {
    onResult,
    loading,
    onError,
    refetch,
  };
}
