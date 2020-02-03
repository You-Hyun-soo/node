// 설치한 express framework를 사용하겠다는 명시. 상수
const express = require('express'); //require : 패키지를 불러오겠다는 의미
// express를 이용해 app(웹 프로그램)을 생성한다.
const app = express();
const mysql = require('mysql'); // mysql을 연결하겠다
const connection = mysql.createConnection({
	host : 'localhost', // 연결할 호스트 정보
	port : 3307,		// 연결 포트 번호
	user : 'root',		// 사용자 이름
	password : '0000',	// 사용자 비밀번호
	database : 'test'	// 연결할 데이터베이스 이름
});
//db(mysql)에서 설정한 값과 동일하게 적는다.
// let data = {};

// 뷰페이지 템플릿 엔진 종류 중 하나를 세팅
app.set('view engine', 'ejs');
// 3000번 포트의 웹 서버를 생성
app.listen(3000,function(){
	console.log("Node.js Web Server On!");
});

// DB 연결 코드 (여기가 실질적인 db 연동)
connection.connect();

// DB에 전달할 명령어 (쿼리문)
// 위에서 설정한 데이터베이스에 내가 원하는 기능을 시킨다
// select, insert
connection.query("쿼리문",function(error, results){
	if (error) {
		console.log("에러 발생 : ", error)
	} else {
		console.log("성공 :", results)
	}
});
// DB 연결 끝
connection.end();


// 라우터 (라우팅)
// 클라이언트에서 주소값으로 들어온 요청을 처리하는 함수
// 요청객체와 응답객체 (request response)
// 요청 데이터는 req안에, 그 요청에 대한 응답은 res를 통해서
app.get('/test', function(req,res){ //요청과 응답의 순서가 바뀌어서는 안된다.
	console.log("코드 수정 확인"); // localhost:3000/test : 요청
	// res.send("okay"); // response : 응답
	// var data = { title : "ejs view page test" };

	let data = { title : "testdata" };

	// list[0] ~ list[3] (length 4)
	data.list = [
		{ name : "홍길동", hobby : "목예", job : "개자" }, 
		{ name : "아개", hobby : "수공예", job : "수발자" },
		{ name : "저개", hobby : "석공예", job : "석발자" },
		{ name : "킹개", hobby : "화공예", job : "화발자" }
		]


	//let data = { title : "text" , list : [ {name : "txt", hobby : "txt", job : "txt"},{}, ]};

	res.render('../view', data); // 경로를 작성 // view페이지의 경로를 연결시켜준다. // 보낼 곳 , 보낼 data
});

/* node 파일명.js : node.js 파일 및 웹 서버를 실행시키는 명령어. 수정한 백엔드 코드가 즉각 반영되지 않기 
 때문에 재차 node 파일명.js를 실행시켜야 한다는 단점이 있다. 
	supervisor : 변경사항이 많은 백엔드 코드 작성시에 그 변경 내용을 즉각 감지하고 최신 코드 상태와
	동일한 환경으로 웹 페이지를 확인할 수 있다. npm에서 다운받을 수 있는 패키지 종류 중에 하나로, 개발
	과정에서는 이 supervisor 상태로 작업하면 보다 효율적이다.
	npm i supervisor -g : 여기서 -g는 글로벌의 약자로, 서버 전역에서 사용할 수 있도록
	붙여주는 추가 옵션이다.
	-g를 붙이지 않고 설치를 해도 작업 메인 파일인 example.js에서 supervisor를 사용하는 것에는 무리가 없다.
 	supervisor example.js
 	error : 내부 또는 외부 명령을 실행할 수 있는 프로그램 또는 파일이 아니다.
 	-> supervisor 윈도우10 환경 이슈
 	user appdata roaming npm 주소 -> 시스템 환경 변수 편집 -> path에서 새로 추가 
 */

/*
	mysql(db) 설치 순서
	1. 현재 pc에 mysql이 이미 설치되어 있는지를 확인한다 
	2. 설치되어 있다면 "완전삭제" (programdata) 후 재부팅
	3. https://dev.mysql.com/downloads/
	4. mysql community server -> go to download page -> mysql-installer-community
	-> 느낌표 표시 창에는 아래 선택
	=> 워크패치 db엔진의 이름
	=> 종류별로 table 이라는 이름으로 세분화 되어 있다

	db에서 항목명 ( key값 ,변수명) - 컬럼, 필드라고 핢
	utf-8mb4 utf-8mb4-bin
	set as default -> 굵은 글씨 
	query는 메모장 : query문법
	my_table idx : pk nn ai

	insert into 테이블명 (컬럼이름) values (실제 저장할 값); : 저장할 때 쓰는 용법

	insert into my_table (name, hobby, job) values ("홍길동", "목공예", "개발자");
	select * from 테이블명; : 해당 테이블을 확인하고 싶을 때
	select 컬럼명, 컬럼명 from 테이블명; : 특정 컬럼명을 보겠다.
	select name, job from my_table;

	npm i mysql --save
*/

