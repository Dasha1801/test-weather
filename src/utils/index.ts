import { iconUrl } from '../constants';

export const getTemp = (n: number): number => Math.round(n - 273);
export const getIcon = (str: string): string => `${iconUrl}${str}.png`;

