const request = require('request-promise-native');
const { writeFileSync, unlinkSync, existsSync } = require('fs');

const fetch = (repo, branch = 'master', file = 'README.md') => {
	const rootURL = 'https://raw.githubusercontent.com';
	const filepath = `${rootURL}/${repo}/${branch}/${file}`;

	return request(filepath);
};

const { projects } = require('../../package.json');

if (!projects.length) {
	console.log('atanas.info: No projects specified in package.json');
} else {
	projects.forEach(project => {
		fetch(project.url)
			.then(data => {
				const name = `projects-dev/${project.name}.md`;

				data = data.replace(/\(http:\/\//gi, '(https://');
				data = data.replace(/```sh/gi, '```bash');

				if (existsSync(name)) {
					unlinkSync(name);
				}

				writeFileSync(name, data);

				console.log('atanas.info: Saved project ' + name);
			})
			.catch(err => {
				// prettier-ignore
				console.log('atanas.info: Failed to fetch project ' + project.url + '. Error is: ' + err)
			});
	});
}
