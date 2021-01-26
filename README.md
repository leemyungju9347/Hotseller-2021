# Hotseller

## 💻 프로젝트 실행 방법
- git clone
```bash
$ git clone <repository 주소>
```
프로젝트 url 복사 후 clone
- 실행 방법
```bash
 - node module install  
 $ npm i or npm install

 - serve
 $ npm start

 - build
 $ npm run build
 ```
## 🛠 프로젝트 버전
- npm 버전
```bash
v 6.9.0
```
## 📚기술스택
- React
- React Router
- JavaScript
- HTML
- CSS

## 📃 코드의 구조
<img src="https://github.com/leemyungju9347/Hotseller-2021/blob/main/src/utils/hotSeller_diagram.png">

## 🎨 화면 기획 의도
- 해시 데이터들을 사용자가 한눈에 보기 좋도록 설계하였고, 가독성 높게 표현하도록 구현했습니다.

- 해시 트렌드(Hash Trend)와 새로운 해시 분석(Recent)으로 분류하여 구성했습니다.

- 이때 해시 트렌드에서는 체크박스 속성으로 `증가량`과 `증가율`로 구분하여 분류 기준을 명시해줬습니다. 또한 그안에서도 날짜별로 데이터를 나누어 세분화하였습니다.
- 데이터에 호버가 되면 애니메이션 효과를 주어 사용자에게 클릭을 유도하도록 구현했습니다.

### 🕹 화면 구현 내용 상세
- 첫화면 로드시 헤더메뉴에는 hashtag라는 로고와 아래 `#해시_트렌드`, `#새로운_해시_분석` 이라는 GNB메뉴로 구성되어있습니다.

- 하단에는 메인페이지로서 해당 메뉴의 데이터 목록들을 구성하고, 증가율과 증가량으로 분류했습니다.

- 데이터에 호버가 되면 애니메이션 효과를 주어 사용자에게 클릭을 유도하도록 구현했습니다.

### 👩‍💻 개발 고려 사항
- 재사용이 많은 코드들을 효율적으로 구현하도록 했습니다.
- 데이터를 못받아올 상황에 대비한 에러처리와 UX처리를 중요하게 생각했습니다.
- props로 데이터를 못받아 올 수 있는 상황을 고려하여 defaultProps로 props를 초기화해줬습니다.
- 필수적인 라이브러리를 제외하고는 자바스크립트를 활용하여 코드를 작성하도록 했습니다.
- 컴포넌트의 JSX문법을 깔끔하게 표현해주기 위해서 가능한 자식컴포넌트를 이용해서 세분화하는 방식으로 컴포넌트를 구성했습니다.

