## week 1 feedback

시맨틱 태그

* 기본적인 기능은 일반적인 div 혹은 span과 같음

* 의미적인 이름이 있음
* 위치를 확인하기 쉬워짐



# week 2

## javascript

* 인터프리터 언어
* node, servo 등이 있음
* require를 통해 그 라인에서 다른 js파일을 불러올 수 있음.
* module.exports를 통해 반환값을 저장
  * 함수도 exports할 수 있음

### npm

> node package manager

```bash
$ npm install
```

실행시 `package.json`의 dpendencies에 있는 모듈들이 설치됨.

```jso
//package.json
{
	"scripts": {
		"start": "nodemon index.js",
		"test": "~~~~"
	}
}
```

위와 같이 설정 후  `nodemon index.js`를 실행하면 `test`필드의 결과가 나온다.



### 과제

가계부 프로그램(or 비슷한 기능의 js를 최대한 활용한 코드)

* 등록
* 조회
* 수정
* 삭제

공부할 내용: 협업을 위한 클린 코드 등





