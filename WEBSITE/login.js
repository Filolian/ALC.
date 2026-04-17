function openModal() {
    document.getElementById('langModal').classList.add('active');
}
function closeModal() {
    document.getElementById('langModal').classList.remove('active');
}
function handleOverlayClick(e) {
    if (e.target === document.getElementById('langModal')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const text = `คุณจะเป็นเหล้าประเภทไหนกัน`;

let i = 0;
const el = document.getElementById('typewriter');

function type() {
    if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(type, 28);
    } else {
        setTimeout(() => { el.style.borderRight = 'none'; }, 800);
    }
}

setTimeout(type, 700);

setInterval(() => {
    if (i < text.length) {
        el.style.borderRightColor = el.style.borderRightColor === 'transparent'
          ? 'var(--purple-light)' : 'transparent';
    }
}, 500);