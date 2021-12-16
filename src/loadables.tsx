import * as React from 'react';

export const About = React.lazy(() => import('./components/containers/about'));
export const Articles = React.lazy(() => import('./components/containers/articles'));
export const Blog = React.lazy(() => import('./components/containers/blog'));
export const BlogPost = React.lazy(() => import('./components/containers/blog-post'));
export const Certificates = React.lazy(() => import('./components/containers/certificates'));
export const ErrorPage = React.lazy(() => import('./components/containers/404'));
export const Home = React.lazy(() => import('./components/containers/hello'));
export const InteractiveResume = React.lazy(() => import('./components/containers/interactive-resume'));
export const Music = React.lazy(() => import('./components/containers/music'));
export const Portfolio = React.lazy(() => import('./components/containers/portfolio'));
export const Skills = React.lazy(() => import('./components/containers/skills'));
export const Slides = React.lazy(() => import('./components/containers/slides'));
export const Social = React.lazy(() => import('./components/containers/social'));
export const Stats = React.lazy(() => import('./components/containers/stats'));
export const Timeline = React.lazy(() => import('./components/containers/timeline'));
export const Videos = React.lazy(() => import('./components/containers/videos'));
