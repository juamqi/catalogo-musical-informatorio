export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { path, ...rest } = req.query || {};

  if (!path) {
    return res.status(400).json({ error: "Missing path parameter" });
  }

  const targetPath = Array.isArray(path) ? path[0] : path;
  if (!targetPath.startsWith("/")) {
    return res.status(400).json({ error: "Invalid path" });
  }
  const targetUrl = new URL(`https://api.deezer.com${targetPath}`);

  Object.entries(rest).forEach(([key, value]) => {
    if (value === undefined) return;
    if (Array.isArray(value)) {
      value.forEach((v) => targetUrl.searchParams.append(key, v));
    } else {
      targetUrl.searchParams.append(key, value);
    }
  });

  try {
    const response = await fetch(targetUrl);
    const contentType =
      response.headers.get("content-type") || "application/json";
    const body = await response.text();

    res.setHeader("Content-Type", contentType);
    res.status(response.status).send(body);
  } catch (error) {
    res.status(500).json({ error: "Failed to reach Deezer API" });
  }
}