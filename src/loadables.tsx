import * as React from 'react';

export const Home = React.lazy(() => import('../src/components/section-hello'));
export const About = React.lazy(() => import('../src/components/section-about'));
export const Timeline = React.lazy(() => import('../src/components/section-timeline'));
export const Skills = React.lazy(() => import('../src/components/section-skills'));
export const Portfolio = React.lazy(() => import('../src/components/section-portfolio'));
export const Stats = React.lazy(() => import('../src/components/section-stats'));
export const Slides = React.lazy(() => import('../src/components/section-slides'));
export const Videos = React.lazy(() => import('../src/components/section-videos'));
export const Articles = React.lazy(() => import('../src/components/section-articles'));
export const Certificates = React.lazy(() => import('../src/components/section-certificates'));
export const Social = React.lazy(() => import('../src/components/section-social'));
export const Blog = React.lazy(() => import('../src/components/section-blog'));
export const BlogPost = React.lazy(() => import('../src/components/section-blog-post'));
export const Music = React.lazy(() => import('../src/components/section-music'));
export const ErrorPage = React.lazy(() => import('../src/components/404'));
export const InteractiveResume = React.lazy(() => import('../src/components/section-interactive-resume'));
