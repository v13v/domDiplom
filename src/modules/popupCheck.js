const popupCheck = () => {

    const popupCheckModal = document.querySelector('.popup-check'),
    checkBtn = document.querySelector('.check-btn'),
    popupClose = popupCheckModal.querySelector('.popup-close'); 
    
    checkBtn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden'
        popupCheckModal.style.display = 'block';
    });
    popupClose.addEventListener('click',() => {
        popupCheckModal.style.display = 'none';
        document.body.style.overflow = ''
    });
    popupCheckModal.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.popup-content');
        if (!target){
            popupCheckModal.style.display = 'none';
            document.body.style.overflow = ''
     } 
     });
    
    };
    
    export default popupCheck;