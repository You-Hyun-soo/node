// 사용자 - 웹 브라우저 - 웹 서버 - 데이터베이스
// 사용자(user) - url주소 (request) - 해당 웹 페이지 출력(response) - database 기반
// request(요청, 콜) - response (응답)
// 요청과 응답의 1:1 대응 관계
// c(create) r(read) u(update) d(delete)
// 하나의 모듈로서 각각 구성되어 있음 (하나의 function)
// view 에서 request(삭제)를 하면 해당 주소에서 해당하는 해당의 모듈을 호출하고 데이터베이스에서 해당 사항을 삭제하고 성공과 실패(에러) 여부를 response하는 방식
// 위의 구조를 Restful API 구조 : React.js

// Restful API 구조 - 전화번호부
// node -v (version)
// npm (자바스크립트를 이용하여 개발 시 효율적인 작업과 편리한 작업에 도움을 주는 각종 기능의 패키지를 지원) -v 
// dateformat(날짜) 같이 npm으로 구글링해서 활용 가능
// dir (directory : 목록을 나열)
// cd (해당 파일에 들어간다)
// 라우팅처리(/주소)
// 프론트엔드를 하면서 백엔드 라우팅(라우터 구조)을 짤 때 사용하는 프레임워크 
// java - spring // node.js (javascript) - express
// npm init : 초기설정 설치 -> package.json 파일 생성
// npm install 패키지명 -- save
// npm i 패키지명 -- save
// ctrl c를 눌러서 빠져나와야 한다.
// ejs : view페이지 템플릿 엔진(가장 보편적인)
// ctrl shift p / install package / package control : add repository / package control : install package / ejs2(%%) 설치 적용
// ejs에서 사용하는 스크립트 태그
// 모두 뷰페이지에 데이터를 연동할 때 사용되는 문법 
// <%=변수명%> : 변수명을 입력해서 변수 안의 데이터를 출력시킨다 
// <% %> : 화면 처리 시 필요한 자바스크립트 코드를 이 태그안에 감싸준다. (조건문, 반복문 등)