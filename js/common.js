document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 페이지 내에서 id가 footer-include인 그릇을 찾습니다.
    const footerTarget = document.getElementById('footer-include');

    if (footerTarget) {
        // 2. 태그에 적힌 data-src 속성 값을 읽어옵니다.
        const filePath = footerTarget.getAttribute('data-src');

        if (filePath) {
            fetch(filePath)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('풋터 파일을 가져오지 못했습니다.');
                })
                .then(htmlText => {
                    // 3. 그릇 안에 풋터 HTML 주입
                    footerTarget.innerHTML = htmlText;
                })
                .catch(error => console.error(error));
        }
    }
});