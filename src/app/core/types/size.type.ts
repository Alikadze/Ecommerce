export const SIZES = ['s', 'm','l', 'xl', 'xxl'] as const; 

export type Size = typeof SIZES[number]