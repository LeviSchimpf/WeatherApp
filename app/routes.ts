import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("about","routes/about.tsx"),
    route("post/:postId", "routes/post.tsx"),
    route("weatherReport/daily", "routes/weatherReport.tsx")
] satisfies RouteConfig;

//Only defines the pattern for how the routing system is going to work.