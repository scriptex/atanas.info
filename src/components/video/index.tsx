import * as React from 'react';

interface Props {
	name: string;
}

export const Video: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
	<video src={`/video/${props.name}.mp4`} loop muted autoPlay className="c-section__video" playsInline />
);

export default Video;
