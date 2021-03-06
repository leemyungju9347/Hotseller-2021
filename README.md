# Hotseller

## 💻 프로젝트 실행 방법
1. 저장소 주소를 복사한뒤 git bash 명령어 창이나, vscode 터미널을 열어서 원하는 폴더위치에 다음과 같은 명령어를 입력해주세요. 
```bash
$ git clone <repository 주소>
```
2. 다음 순서대로 vscode터미널 창에 입력해주세요.
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

- 데이터에 호버가 되면 애니메이션 효과를 주어 사용자에게 클릭을 유도하도록 구현했습니다.

- 체크박스로 증가량, 증가율을 선택하도록 구현했습니다.

- 해시데이터를 클릭하면 해시태그의 상세 정보를 볼 수 있는 페이지로 로드되고 url에 해당 해시태그 이름을 명시해줬습니다.

- 상세페이지로 이동시 데이터를 불러오기전 사용자가 인식할 수 있도록 loading이라는 글자를 띄워줬습니다.

- 데이터를 불러오지 못하거나 화면을 로드하지 못할 경우에는 PageNotFound 컴포넌트를 생성해서 UX처리를 해줬습니다.

### 👩‍💻 개발 고려 사항
- 재사용이 많은 코드들을 효율적으로 구현하도록 했습니다.
- 데이터를 못받아올 상황에 대비한 에러처리와 UX처리를 중요하게 생각했습니다.
- props로 데이터를 못받아 올 수 있는 상황을 고려하여 defaultProps로 props를 초기화해줬습니다.
- 필수적인 라이브러리를 제외하고는 자바스크립트를 활용하여 코드를 작성하도록 했습니다.
- 컴포넌트의 JSX문법을 깔끔하게 표현해주기 위해서 가능한 자식컴포넌트를 이용해서 세분화하는 방식으로 컴포넌트를 구성했습니다.

