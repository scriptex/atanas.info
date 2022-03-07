import * as React from 'react';

export const Home = React.lazy(() => import('../src/components/containers/hello'));
export const About = React.lazy(() => import('../src/components/containers/about'));
export const Timeline = React.lazy(() => import('../src/components/containers/timeline'));
export const Skills = React.lazy(() => import('../src/components/containers/skills'));
export const Portfolio = React.lazy(() => import('../src/components/containers/portfolio'));
export const Stats = React.lazy(() => import('../src/components/containers/stats'));
export const Slides = React.lazy(() => import('../src/components/containers/slides'));
export const Videos = React.lazy(() => import('../src/components/containers/videos'));
export const Articles = React.lazy(() => import('../src/components/containers/articles'));
export const Certificates = React.lazy(() => import('../src/components/containers/certificates'));
export const Social = React.lazy(() => import('../src/components/containers/social'));
export const Blog = React.lazy(() => import('../src/components/containers/blog'));
export const BlogPost = React.lazy(() => import('../src/components/containers/blog-post'));
export const Music = React.lazy(() => import('../src/components/containers/music'));
export const Resume = React.lazy(() => import('../src/components/containers/resume'));
export const InteractiveResume = React.lazy(() => import('../src/components/containers/interactive-resume'));
export const ErrorPage = React.lazy(() => import('../src/components/404'));
