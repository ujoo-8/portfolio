document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // 1. 다른 열려있는 아코디언 모두 닫기
            headers.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.display = 'none';
                }
            });

            // 2. 현재 클릭한 아이템 토글
            this.classList.toggle('active');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});



















