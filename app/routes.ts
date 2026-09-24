import {
     type RouteConfig, 
     index, 
     route,
    layout, 
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("about","routes/about.tsx"),
    route("post/:postId", "routes/post.tsx"),
    
    // Nested Routes
    layout("routes/weatherReport.tsx", [
        route("weatherDaily", "routes/weatherDaily.tsx"),
        route("weatherWeekly", "routes/weatherWeek.tsx"),
    ])
] satisfies RouteConfig;

//Only defines the pattern for how the routing system is going to work.