/**
 * Placeholder em blur (estilo shimmer) para as imagens remotas.
 * Como as fotos vêm do Unsplash, não há `blurDataURL` gerado em build —
 * este SVG minúsculo elimina o "flash" de fundo cinza enquanto a foto real
 * baixa, melhorando a percepção de velocidade (LCP).
 */
const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#E8E0D3" offset="20%" />
      <stop stop-color="#F4F1EB" offset="50%" />
      <stop stop-color="#E8E0D3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#E8E0D3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
</svg>`;

function toBase64(str: string): string {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64");
  }
  return window.btoa(str);
}

export const blurDataURL: string = `data:image/svg+xml;base64,${toBase64(
  shimmer(700, 475)
)}`;
