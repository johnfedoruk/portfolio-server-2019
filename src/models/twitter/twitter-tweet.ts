import { TwitterExtendedMedia } from "./twitter-extended-media";
import { TwitterHashtag } from "./twitter-hashtag";
import { TwitterMedia } from "./twitter-media";
import { TwitterSymbol } from "./twitter-symbol";
import { TwitterUrl } from "./twitter-url";
import { TwitterUserMention } from "./twitter-user-mention";

export interface TwitterTweet {
    created_at: Date;
    entities: {
        hashtags?: TwitterHashtag[],
        symbols?: TwitterSymbol[],
        user_mentions?: TwitterUserMention[],
        urls?: TwitterUrl[],
        media?: TwitterMedia[],
    };
    extended_entities?: {
        media?: TwitterExtendedMedia[],
    };
    favorite_count: number;
    id: number;
    retweet_count: number;
    text: string;
    truncated: boolean;
}
