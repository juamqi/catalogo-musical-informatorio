import { useQuery } from "@tanstack/react-query";
import { searchArtists } from "../api/deezer";

export function useArtistsSearch(query) {
  return useQuery({
    queryKey: ["artists", query],
    queryFn: () => searchArtists(query),
    enabled: !!query,
  });
}