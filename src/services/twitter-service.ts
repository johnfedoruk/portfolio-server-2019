import { Log } from "../decorators/log";
import { TwitterExtendedMedia } from "../models/twitter/twitter-extended-media";
import { TwitterHashtag } from "../models/twitter/twitter-hashtag";
import { TwitterMedia } from "../models/twitter/twitter-media";
import { TwitterSymbol } from "../models/twitter/twitter-symbol";
import { TwitterTweet } from "../models/twitter/twitter-tweet";
import { TwitterUrl } from "../models/twitter/twitter-url";
import { TwitterUserMention } from "../models/twitter/twitter-user-mention";

// tslint:disable-next-line:no-var-requires
const Twitter = require("twitter");

export class TwitterService {
    private twitter = new Twitter({
        access_token_key: "722178979067637760-SrgzS0dMhsyM3ATvKH9DvAu74jLtFQv",
        access_token_secret: "eMf683yErrLEP2WNfqKDZ9w18PsK99nthH5Ir9GCEZ6hM",
        consumer_key: "8ghR1DcrSZ5NXxYfRAIlzUvRx",
        consumer_secret: "IgVnHGIyCxkdkqUZzvB7s7qBAVm0VTWCQlYayVdGjNFqM3jAjR",
    });
    @Log()
    public async getTweets(screen_name: string, opts: any = {}): Promise<TwitterTweet[]> {
        opts.screen_name = screen_name;
        const tweets: TwitterTweet[] = await this.twitter.get("statuses/user_timeline", opts);
        return tweets.map((tweet) => this.cleanTweet(tweet));
    }
    protected cleanTweet(tweet: TwitterTweet): TwitterTweet {
        const cloned: TwitterTweet = {
            created_at: tweet.created_at,
            entities: {
                hashtags: tweet.entities.hashtags ?
                    tweet.entities.hashtags.map(
                        (hashtag: TwitterHashtag) => {
                            return {
                                text: hashtag.text,
                            };
                        },
                    ) : [],
                media: tweet.entities.media ?
                    tweet.entities.media.map(
                        (media: TwitterMedia) => {
                            return {
                                media_url_https: media.media_url_https,
                                type: media.type,
                            };
                        },
                    ) : [],
                symbols: tweet.entities.symbols ?
                    tweet.entities.symbols.map(
                        (symbol: TwitterSymbol) => {
                            return {
                                text: symbol.text,
                            };
                        },
                    ) : [],
                urls: tweet.entities.urls ?
                    tweet.entities.urls.map(
                        (url: TwitterUrl) => {
                            return {
                                display_url: url.display_url,
                                expanded_url: url.expanded_url,
                            };
                        },
                    ) : [],
                user_mentions: tweet.entities.user_mentions ?
                    tweet.entities.user_mentions.map(
                        (user_mention: TwitterUserMention) => {
                            return {
                                name: user_mention.name,
                                screen_name: user_mention.screen_name,
                            };
                        },
                    ) : [],
            },
            extended_entities: tweet.extended_entities ? {
                media:
                    tweet.extended_entities.media ?
                        tweet.extended_entities.media.map(
                            (extended_entity: TwitterExtendedMedia) => {
                                return {
                                    media_url_https: extended_entity.media_url_https,
                                    type: extended_entity.type,
                                    video_info: extended_entity.video_info ?
                                        extended_entity.video_info :
                                        undefined,
                                };
                            },
                        ) :
                        [],
            } : undefined,
            favorite_count: tweet.favorite_count,
            id: tweet.id,
            retweet_count: tweet.retweet_count,
            text: tweet.text,
            truncated: tweet.truncated,
        };
        return cloned;
    }
}
