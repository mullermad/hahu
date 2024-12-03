import { ref } from "vue";

// Default values for filter, limit, offset, and orderBy
const defaultOffset = ref(0);
const defaultLimit = ref(15);
const defaultFilter = ref({});
const defaultOrderBy = ref([
  { priority: "desc_nulls_last" },
  { deadline: "asc" },
]);

export default function (
  query,
  {
    filter = defaultFilter,
    limit = defaultLimit,
    offset = defaultOffset,
    order_by = defaultOrderBy,
  }
) {
  // Use query function to fetch data with the provided parameters
  const { onResult, loading, onError, refetch } = useQuery(
    query,
    () => ({
      limit: limit.value,
      offset: offset.value,
      filter: filter?.value,

      order_by: order_by.value, // Access the value of orderBy
    }),
    () => ({
      fetchPolicy: "network-only", // Force the query to always fetch fresh data
    })
  );

  return {
    onResult, // Function to handle the result
    loading, // Indicates loading state
    refetch, // Function to refetch the data
    onError, // Function to handle errors
  };
}
