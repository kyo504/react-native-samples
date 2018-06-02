/*
 * Written by re-start team
 * https://github.com/react-everywhere/re-start
 * 
 * Original file:
 * https://github.com/react-everywhere/re-start/blob/master/scripts/addDevDependencies.js
 */

'use strict';

const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

/**
 * Use Yarn if available, it's much faster than the npm client.
 * Return the version of yarn installed on the system, null if yarn is not available.
 */
function getYarnVersionIfAvailable() {
	let yarnVersion;
	try {
		// execSync returns a Buffer -> convert to string
		yarnVersion = (execSync('yarn --version', {
			stdio: [0, 'pipe', 'ignore'],
		}).toString() || ''
		).trim();
	} catch (error) {
		return null;
	}
	return yarnVersion;
}

function installDevDependencies() {
	console.log('Adding dev dependencies for the project...');

	const devDependenciesJsonPath = path.resolve('devDependencies.json');
	const devDependencies = JSON.parse(
		fs.readFileSync(devDependenciesJsonPath)
	);
	let depsToInstall = [];

	for (const depName in devDependencies) {
		const depVersion = devDependencies[depName];
		const depToInstall = `${depName}@${depVersion}`;
		depsToInstall.push(depToInstall);
	}

	depsToInstall = depsToInstall.join(' ');
	console.log(`Adding ${depsToInstall}...`);
	if (getYarnVersionIfAvailable()) {
		execSync(`yarn add ${depsToInstall} -D`, { stdio: 'inherit' });
	} else {
		execSync(`npm install ${depsToInstall} --save -dev`);
	}
	console.log('Deleting devDependencies.json...');
	execSync(`rm  ${devDependenciesJsonPath}`);
}

installDevDependencies();