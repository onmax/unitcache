export interface CoreRow { id: string, title: string, value: number, status: 'ok' | 'warn' }

export function coreRows (n: number, seed = 75): CoreRow[] {
  return Array.from({ length: n }, (_, i) => ({ id: `core-${i}`, title: `Core ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
