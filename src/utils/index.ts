export const parseDate = (date: Date) => {
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
        "0" + date.getDate()
    ).slice(-2)}`;
};

export const isRobot = (userAgent: string): boolean => {
    const robots = new RegExp(
        (
            [
                /bot/,
                /spider/,
                /crawl/, // GENERAL TERMS
                /APIs-Google/,
                /AdsBot/,
                /Googlebot/, // GOOGLE ROBOTS
                /mediapartners/,
                /Google Favicon/,
                /FeedFetcher/,
                /Google-Read-Aloud/,
                /DuplexWeb-Google/,
                /googleweblight/,
                /bing/,
                /yandex/,
                /baidu/,
                /duckduck/,
                /yahoo/, // OTHER ENGINES
                /ecosia/,
                /ia_archiver/,
                /facebook/,
                /instagram/,
                /pinterest/,
                /reddit/, // SOCIAL MEDIA
                /slack/,
                /twitter/,
                /whatsapp/,
                /youtube/,
                /semrush/, // OTHER
            ] as RegExp[]
        )
            .map((r) => r.source)
            .join("|"),
        "i",
    ); // BUILD REGEXP + "i" FLAG

    return robots.test(userAgent);
};
