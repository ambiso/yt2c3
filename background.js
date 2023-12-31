chrome.runtime.onInstalled.addListener(function () {
	console.log("YouTube 2 CCC Redirector extension installed.");
});

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
	const url = new URL(details.url);
	const host = url.host;
	if (host === 'www.youtube.com' || host.endsWith('.youtube.com')) {
		if (details.parentFrameId === -1) {
			chrome.tabs.update({ url: 'https://media.ccc.de' });
		}
	}
});
