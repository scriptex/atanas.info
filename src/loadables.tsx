import * as React from 'react';

export const Home = React.lazy(() => import('../src/containers/hello'));
export const About = React.lazy(() => import('../src/containers/about'));
export const Timeline = React.lazy(() => import('../src/containers/timeline'));
export const Skills = React.lazy(() => import('../src/containers/skills'));
export const Portfolio = React.lazy(() => import('../src/containers/portfolio'));
export const Stats = React.lazy(() => import('../src/containers/stats'));
export const Slides = React.lazy(() => import('../src/containers/slides'));
export const Videos = React.lazy(() => import('../src/containers/videos'));
export const Articles = React.lazy(() => import('../src/containers/articles'));
export const Certificates = React.lazy(() => import('../src/containers/certificates'));
export const Social = React.lazy(() => import('../src/containers/social'));
export const Blog = React.lazy(() => import('../src/containers/blog'));
export const BlogPost = React.lazy(() => import('../src/containers/blog-post'));
export const Music = React.lazy(() => import('../src/containers/music'));
export const Resume = React.lazy(() => import('../src/containers/resume'));
export const InteractiveResume = React.lazy(() => import('../src/containers/interactive-resume'));
export const ErrorPage = React.lazy(() => import('../src/components/404'));
