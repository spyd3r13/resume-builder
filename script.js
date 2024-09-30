// script.js
document.getElementById('previewBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const hobbies = document.getElementById('hobbies').value;
    const bgColor = document.getElementById('bgColor').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const fontSize = document.getElementById('fontSize').value;

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.style.backgroundColor = bgColor;
    resumePreview.style.fontFamily = fontFamily;
    resumePreview.style.fontSize = `${fontSize}px`;

    resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p><strong>Work Experience:</strong></p>
        <p>${experience}</p>
        <p><strong>Hobbies:</strong></p>
        <p>${hobbies}</p>
    `;
});

document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeContent = document.getElementById('resumePreview').innerHTML;
    const link = document.createElement('a');
    link.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeContent);
    link.download = 'resume.html';
    link.click();
});
