import { TextPost } from '../definitions/textpost';
import { TeamProfileData } from '../config/profiles-config';

const today = new Date();
const yesterday = new Date();
const before = new Date();

var data = [
    {
        id: "1",
        title: "What does the fox really say?",
        authors: TeamProfileData,
        publishedDate: today,
        topic: "Technology",
        teaser: "It's time to finally unveil the secret behind the mysterious mammal",
        thumbanailUrl: "https://itech104695.files.wordpress.com/2016/03/cool-images-for-backgrounds-1600-x-1174.jpg",
        featuredArtURL: "https://www.mammal.org.uk/wp-content/uploads/2019/02/Red-fox-Katie-Nethercoat.jpg",
        featuredArtAlt: "A fox",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "I like trains"
    },
    {
        id: "2",
        title: "Say goodbye to trains",
        authors: TeamProfileData,
        publishedDate: yesterday,
        topic: "Ethics",
        teaser: "Coronavirus has all but ensured these beautiful contraptions will go away.",
        featuredArtURL: "https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54ca9c8cbd1bb_-_monstertrain-470-0210.jpg?fill=320:234&resize=480:*",
        featuredArtAlt: "I like trains a lot",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "He likes trains"
    },

    {
        id: "string3",
        title: "ASDF videos were our childhood",
        authors: TeamProfileData,
        publishedDate: before,
        topic: "Technology",
        teaser: "And they still are. Somewhat.",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        featuredArtAlt: "I still like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string3"
    },
    {
        id: "string4",
        title: "Textpost 4",
        authors: TeamProfileData,
        publishedDate: before,
        topic: "Technology",
        teaser: "Teaser for this awesome post 4",
        featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
        featuredArtAlt: "I still like trains",
        additionalArtURLs: [],
        additionalArtAlts: [],
        content: "/posts/string4"
    },
    {
      id: "string5",
      title: "What does the fox really say?",
      authors: TeamProfileData,
      publishedDate: today,
      topic: "Technology",
      teaser: "It's time to finally unveil the secret behind the mysterious mammal",
      featuredArtURL: "https://itech104695.files.wordpress.com/2016/03/cool-images-for-backgrounds-1600-x-1174.jpg",
      featuredArtAlt: "A fox",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string1"
    },
    {
      id: "string6",
      title: "Say goodbye to trains",
      authors: TeamProfileData,
      publishedDate: yesterday,
      topic: "Ethics",
      teaser: "Coronavirus has all but ensured these beautiful contraptions will go away.",
      featuredArtURL: "https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54ca9c8cbd1bb_-_monstertrain-470-0210.jpg?fill=320:234&resize=480:*",
      featuredArtAlt: "I like trains a lot",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string2"
    },

    {
      id: "string7",
      title: "ASDF videos were our childhood",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "And they still are. Somewhat.",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string3"
    },
    {
      id: "string8",
      title: "Textpost 4",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 4",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string9",
      title: "Textpost 5",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string10",
      title: "Textpost 6",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string11",
      title: "Textpost 7",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string12",
      title: "Textpost 8",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string13",
      title: "Textpost 9",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string14",
      title: "Textpost 10",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string15",
      title: "Textpost 11",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string16",
      title: "Textpost 12",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string17",
      title: "Textpost 13",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string18",
      title: "Textpost 14",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string19",
      title: "Textpost 15",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string20",
      title: "Textpost 16",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string21",
      title: "Textpost 17",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string22",
      title: "Textpost 18",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string23",
      title: "Textpost 19",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string24",
      title: "Textpost 20",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string25",
      title: "Textpost 21",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string26",
      title: "Textpost 22",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string27",
      title: "Textpost 23",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string28",
      title: "Textpost 24",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string29",
      title: "Textpost 25",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string30",
      title: "Textpost 26",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string31",
      title: "Textpost 27",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string32",
      title: "Textpost 28",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string33",
      title: "Textpost 29",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string34",
      title: "Textpost 30",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string35",
      title: "Textpost 31",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string36",
      title: "Textpost 32",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string37",
      title: "Textpost 33",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string38",
      title: "Textpost 34",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string39",
      title: "Textpost 35",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string40",
      title: "Textpost 36",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string41",
      title: "Textpost 37",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string42",
      title: "Textpost 38",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string43",
      title: "Textpost 39",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string44",
      title: "Textpost 40",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string45",
      title: "Textpost 41",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
    {
      id: "string46",
      title: "Textpost 42",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 5",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
      {
      id: "string47",
      title: "Textpost 43",
      authors: TeamProfileData,
      publishedDate: before,
      topic: "Technology",
      teaser: "Teaser for this awesome post 6",
      featuredArtURL: "https://i.ytimg.com/vi/BaQq6wLcr5o/maxresdefault.jpg",
      featuredArtAlt: "I still very very much like trains",
      additionalArtURLs: [],
      additionalArtAlts: [],
      content: "/posts/string4"
    },
];

export var POSTS: TextPost[] = [];

data.forEach(elem => {
    POSTS.push(new TextPost(
        elem.id,
        elem.title,
        elem.authors,
        elem.publishedDate,
        elem.topic,
        elem.teaser,
        elem.featuredArtURL,
        elem.featuredArtAlt,
        elem.additionalArtURLs,
        elem.additionalArtAlts,
        elem.content
    ));
});
