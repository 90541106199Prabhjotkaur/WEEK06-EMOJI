document.addEventListener('DOMContentLoaded', () => {
    const emojiGallery = document.getElementById('emojiGallery');
    const emojis = ['😀', '😂', '😎', '😍', '🤔', '😴', '🥳', '😭', '🤯', '🙄', '🤖', '👾', '🎃', '🌟', '🔥'];

    emojis.forEach(emoji => {
        const emojiElement = document.createElement('div');
        emojiElement.classList.add('emoji');
        emojiElement.textContent = emoji;
        emojiGallery.appendChild(emojiElement);
    });
});
