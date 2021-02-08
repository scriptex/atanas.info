import * as React from 'react';

interface Props {
	name: string;
}

export const Video: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => (
	<video
		src={`/video/${props.name}.mp4`}
		loop={true}
		muted={true}
		autoPlay={true}
		className="c-section__video"
		playsInline={true}
	/>
);

export default Video;
