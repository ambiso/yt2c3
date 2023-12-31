chrome.runtime.onInstalled.addListener(function () {
	console.log("YouTube 2 CCC Redirector extension installed.");
});

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
	const host = new URL(details.url).host;
	if (host === 'www.youtube.com' || host.endsWith('.youtube.com')) {
		chrome.tabs.update({ url: 'https://media.ccc.de' });
	}
});
