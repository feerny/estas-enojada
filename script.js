document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('celebrationMusic');



 
        const playButton = document.getElementById('playButton');
        playButton?.addEventListener('click', () => {
            audio.play();
        });
   



        const dontForgiveButton = document.getElementById('dontForgive');
    
        dontForgiveButton.addEventListener('click', () => {
            const container = dontForgiveButton.closest('.container');
            const rect = container.getBoundingClientRect();
            const newX = Math.random() * (rect.width - dontForgiveButton.offsetWidth);
            const newY = Math.random() * (rect.height - dontForgiveButton.offsetHeight);
            
            dontForgiveButton.style.position = 'absolute';
            dontForgiveButton.style.left = `${newX}px`;
            dontForgiveButton.style.top = `${newY}px`;
        });
});
