import * as React from 'react';

export const About = React.lazy(() => import('./containers/about'));
export const Articles = React.lazy(() => import('./containers/articles'));
export const Blog = React.lazy(() => import('./containers/blog'));
export const BlogPost = React.lazy(() => import('./containers/blog-post'));
export const Certificates = React.lazy(() => import('./containers/certificates'));
export const ErrorPage = React.lazy(() => import('./containers/404'));
export const Home = React.lazy(() => import('./containers/hello'));
export const InteractiveResume = React.lazy(() => import('./containers/interactive-resume'));
export const Music = React.lazy(() => import('./containers/music'));
export const Portfolio = React.lazy(() => import('./containers/portfolio'));
export const Skills = React.lazy(() => import('./containers/skills'));
export const Slides = React.lazy(() => import('./containers/slides'));
export const Social = React.lazy(() => import('./containers/social'));
export const Stats = React.lazy(() => import('./containers/stats'));
export const Timeline = React.lazy(() => import('./containers/timeline'));
export const Videos = React.lazy(() => import('./containers/videos'));
