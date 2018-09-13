export interface TwitterVideoInfo {
    aspect_ration: [number, number];
    duration_millis: number;
    variants: Array<{
        bitrate?: number;
        content_type: string;
        url: string;
    }>;
}
