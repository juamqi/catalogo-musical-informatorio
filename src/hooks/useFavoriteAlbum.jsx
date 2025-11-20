import { useMutation } from "@tanstack/react-query";

export function useFavoriteAlbum() {
  return useMutation({
    mutationFn: async (album) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          albumId: album.id,
          title: album.title,
          artist: album.artist,
        }),
      });
      if (!res.ok) {
        throw new Error("No se pudo guardar el favorito");
      }
      return res.json();
    },
  });
}