/** Format a duration in milliseconds as seconds with one decimal. */
export function formatDuration(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`;
}
