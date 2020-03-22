export const index = (
  fn: (n: number) => void,
  x: any[],
  a: number,
  b: number,
  c: number
) => (x[a + b] ? fn(a + b) : fn(c));
