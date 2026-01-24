import { format } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const generatePackVersion = (): string => {
    // Example version logic
    return format(new Date(), 'yyyy-MM-dd') + '.' + Math.floor(Math.random() * 100);
}

export const simpleChecksum = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
}
