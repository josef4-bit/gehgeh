// List of audio clips
const clips = [
    {name: "Motivation 1", file: "audio/clip1.mp3"},
    {name: "Motivation 2", file: "audio/clip2.mp3"},
    {name: "Motivation 3", file: "audio/clip3.mp3"},
    // Add all 25 clips here
];

const audioList = document.getElementById('audio-list');

clips.forEach(clip => {
    const card = document.createElement('div');
    card.className = 'audio-card';

    card.innerHTML = `
        <h3>${clip.name}</h3>
        <audio controls>
            <source src="${clip.file}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button onclick="downloadAudio('${clip.file}', '${clip.name}.mp3')">Download</button>
    `;

    audioList.appendChild(card);
});

// Download function
function downloadAudio(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}