// 설치한 express framework를 사용하겠다는 명시. 상수
const express = require('express'); //require : 패키지를 불러오겠다는 의미
// express를 이용해 app(웹 프로그램)을 생성한다.
const app = express();

// let data = {};

// 뷰페이지 템플릿 엔진 종류 중 하나를 세팅
app.set('view engine', 'ejs');
// 3000번 포트의 웹 서버를 생성
app.listen(3000,function(){
	console.log("Node.js Web Server On!");
});

// 라우터 (라우팅)
// 클라이언트에서 주소값으로 들어온 요청을 처리하는 함수
// 요청객체와 응답객체 (request response)
// 요청 데이터는 req안에, 그 요청에 대한 응답은 res를 통해서
app.get('/test', function(req,res){ //요청과 응답의 순서가 바뀌어서는 안된다.
	console.log("test라는 url로 요청이 들어왔습니다."); // localhost:3000/test : 요청
	// res.send("okay"); // response : 응답
	// var data = { title : "ejs view page test" };

	let data = {};

	data.list = [
		{ name : "홍길동", hobby : "목공예", job : "개발자" }, 
		{ name : "아무개", hobby : "화공예", job : "선발자" }
		]

	res.render('../view', data); // 경로를 작성 // view페이지의 경로를 연결시켜준다. // 보낼 곳 , 보낼 data
});

