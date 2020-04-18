let protooPort = 80;

if (window.location.hostname === 'commercifly.ml')
	protooPort = 80;

export function getProtooUrl({ roomId, peerId, forceH264, forceVP9 })
{
	const hostname = window.location.hostname;
	let url = `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;

	if (forceH264)
		url = `${url}&forceH264=true`;
	else if (forceVP9)
		url = `${url}&forceVP9=true`;

	return url;
}
