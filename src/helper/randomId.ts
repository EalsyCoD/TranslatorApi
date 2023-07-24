export function randomId(): string {
  console.log(Math.random().toString(36).substring(2, 9));
  return Math.random().toString(36).substring(2, 9);
}
