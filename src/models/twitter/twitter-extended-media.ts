import { TwitterMedia } from "./twitter-media";
import { TwitterVideoInfo } from "./twitter-video-info";

export interface TwitterExtendedMedia extends TwitterMedia {
    video_info?: TwitterVideoInfo;
}
