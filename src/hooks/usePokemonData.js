import {
    useQueryClient,
    useQuery
} from '@tanstack/react-query'

async function getPokemonData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("failed to do request pokemon data");
    }
  }

export function usePokemonData(pokemonName, url) {
    const queryClient = useQueryClient();
  
    return useQuery({
      queryKey: [pokemonName],
      queryFn: () => getPokemonData(url),
      staleTime: Infinity,
    });
  }