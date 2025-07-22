// filepath: /url-shortener-app/url-shortener-app/src/types/index.ts
export interface ShortenedUrl {
    originalUrl: string;
    shortenedUrl: string;
    createdAt: Date;
}

export interface ValidationError {
    message: string;
    field: string;
}