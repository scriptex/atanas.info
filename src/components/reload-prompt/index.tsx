/// <reference types="../../../node_modules/vite-plugin-pwa/client" />

import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import { Button } from '@components';

export const ReloadPrompt: React.FC = () => {
	const {
		needRefresh: [needRefresh, setNeedRefresh],
		offlineReady: [offlineReady, setOfflineReady],
		updateServiceWorker
	} = useRegisterSW({
		onRegisteredSW(_, r: ServiceWorkerRegistration | undefined) {
			if (r) {
				setInterval(() => {
					r.update();
				}, 20000);
			}
		},
		onRegisterError(error) {
			console.log('SW registration error', error);
		}
	});

	return needRefresh || offlineReady ? (
		<div className="c-reload-prompt">
			<p>
				{offlineReady ? (
					<span>App ready to work offline</span>
				) : (
					<span>New content available, click on reload button to update.</span>
				)}
			</p>

			<div className="c-reload-prompt__actions">
				{needRefresh && (
					<Button type="button" className="c-btn--small" onClick={() => updateServiceWorker(true)}>
						Reload
					</Button>
				)}

				<Button
					type="button"
					className="c-btn--small"
					onClick={() => {
						setNeedRefresh(false);
						setOfflineReady(false);
					}}
				>
					Close
				</Button>
			</div>
		</div>
	) : null;
};

export default ReloadPrompt;
