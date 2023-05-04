import {
    useQueryClient,
    useQuery
} from '@tanstack/react-query'

const API_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("failed to do request list of pokemon");
  }
}

export function usePokemonList() {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonList,
    staleTime: Infinity,
  });
}