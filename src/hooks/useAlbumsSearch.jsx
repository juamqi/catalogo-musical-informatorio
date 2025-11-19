import { useQuery } from "@tanstack/react-query";
import { searchAlbums } from "../api/deezer";

export function useAlbumsSearch(query) {
  return useQuery({
    queryKey: ["albums", query],
    queryFn: () => searchAlbums(query),
    enabled: !!query,
  });
}