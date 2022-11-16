const DUMMYEVENTS = [
  {
    id: 1,
    name: "sajid",
    posts: ["Next js is help full for me"],
    Comments: ["good", "verygood", "excellent"],
    slug: "next-js",
  },
  {
    id: 2,
    name: "ateeq",
    posts: ["Node js is fullstack framework"],
    Comments: ["good", "Bravo", "excellent"],
    slug: "Node-js",
  },
  {
    id: 3,
    name: "arslan",
    posts: ["Next js provide reactframework"],
    Comments: ["good", "Bravo", "excellent"],
    slug: "Nust-js",
  },
];

export function getFeaturedPosts() {
  return DUMMYEVENTS.filter((event) => event.isFeatured);
}
export function getFeaturedPostsbyId(names) {
  console.log(names);
  return DUMMYEVENTS.filter((event) => event.name === names);
}
export function getFeaturedcommentsbyId(slugs) {
  console.log(slugs);
  return DUMMYEVENTS.filter((event) => event.slug === slugs);
}

export function getAllPosts() {
  return DUMMYEVENTS;
}
