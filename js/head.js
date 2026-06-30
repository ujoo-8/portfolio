// 모든 서브 페이지의 head 속성을 자동으로 만들어주는 파일
const head = document.head;

// 1. 메타 태그들 주입
head.insertAdjacentHTML('beforeend', `<meta charset="UTF-8">`);
head.insertAdjacentHTML('beforeend', `<meta name="viewport" content="width=device-width, initial-scale=1.0">`);

// 2. 공통 CSS 파일들 주입 (현재 페이지 위치 기준으로 상대경로 조절 가능)
head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="../css/reset.css">`);
head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="../css/common.css">`);
head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="../css/style.css">`);