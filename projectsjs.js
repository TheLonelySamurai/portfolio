document.addEventListener('DOMContentLoaded', () => {
    const exitButton = document.querySelector('.innercontent .exit-button');
    const unityImageWrapper = document.querySelector('.project-page-source.unity .img-wrapper');
    const innerContent = document.querySelector('.innercontent');

    unityImageWrapper.addEventListener('click', () => {
        if (innerContent.style.display === 'none' || innerContent.style.display === '') {
            innerContent.style.display = 'flex';
            setTimeout(() => {
                innerContent.style.opacity = '1';
                innerContent.style.height = '90vh';
                innerContent.style.zIndex = '1000'; // Ensure it appears in front
            }, 10);
        } else {
            innerContent.style.opacity = '0';
            innerContent.style.height = '0';
            setTimeout(() => {
                innerContent.style.display = 'none';
                innerContent.style.zIndex = '-1'; // Reset z-index
            }, 1000);
        }
    });
    exitButton.addEventListener('click', () => {
        if (innerContent.style.display !== 'none' || innerContent.style.display !== ''){
            innerContent.style.opacity = '0';
            innerContent.style.height = '0';
            setTimeout(() => {
                innerContent.style.display = 'none';
                innerContent.style.zIndex = '-1'; // Reset z-index
            }, 1000);
        }
    })
});