export function getTeaser(body: string, maxLength = 160): string {
  const firstParagraph = body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block.length > 0 && !block.startsWith('#')) ?? '';

  const plain = firstParagraph
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trimEnd()}…`;
}
