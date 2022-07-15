import * as React from 'react';

export const Home = React.lazy(() => import('./components/hello'));
export const About = React.lazy(() => import('./components/about'));
export const Timeline = React.lazy(() => import('./components/timeline'));
export const Skills = React.lazy(() => import('./components/skills'));
export const Portfolio = React.lazy(() => import('./components/portfolio'));
export const Stats = React.lazy(() => import('./components/stats'));
export const Slides = React.lazy(() => import('./components/slides'));
export const Videos = React.lazy(() => import('./components/videos'));
export const Articles = React.lazy(() => import('./components/articles'));
export const Certificates = React.lazy(() => import('./components/certificates'));
export const Social = React.lazy(() => import('./components/social'));
export const Blog = React.lazy(() => import('./components/blog'));
export const BlogPost = React.lazy(() => import('./components/blog-post'));
export const Music = React.lazy(() => import('./components/music'));
export const Resume = React.lazy(() => import('./components/resume'));
export const InteractiveResume = React.lazy(() => import('./components/interactive-resume'));
export const ErrorPage = React.lazy(() => import('../src/components/404'));
