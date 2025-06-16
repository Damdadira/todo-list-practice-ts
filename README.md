# 투두리스트
<div align="center">
  <img src="/src/assets/imgs/img_todolist.png" alt="todolist preview" />
</div>
<br/><br/>

## 💡 주요 기능 및 구현
<details>
  <summary><h3 style="display:inline; margin-left:4px">1️⃣ 추가</h3></summary>

  - **아이템 추가:** 텍스트 입력 후 'Enter'를 누르면 아이템을 하나씩 추가할 수 있습니다.
  
    <img src="/src/assets/imgs/video_todolist_add.gif" alt="video"/>
</details>

<details>
  <summary><h3 style="display:inline; margin-left:4px">2️⃣ 삭제</h3></summary>

  - **아이템 삭제:** 리스트 오른쪽에 있는 휴지통을 클릭하여 아이템을 하나씩 삭제할 수 있습니다.
  
    <img src="/src/assets/imgs/video_todolist_remove.gif" alt="video"/>
</details>

<details>
  <summary><h3 style="display:inline; margin-left:4px">3️⃣ 완료</h3></summary>

  - **완료된 아이템 체크:** 리스트 왼쪽에 있는 체크박스를 클릭하면 스타일과 남은 할 일의 개수가 변경됩니다.
  
    <img src="/src/assets/imgs/video_todolist_complete.gif" alt="video"/>
</details>
<br/>

## 🛠 기술 스택
#### 🕹 프론트엔드
<div>
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB" />&nbsp;
  <img src="https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white" />&nbsp;
  <img src="https://img.shields.io/badge/Context--Api-000000?style=flat-square&logo=react" />&nbsp;
  <img src="https://img.shields.io/badge/vanilla--extract-%2324C8DB.svg?style=flat-square&logoColor=white" />&nbsp;
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white" />&nbsp;
</div>
<br/>

#### 🚀 배포 도구
<img src="https://img.shields.io/badge/Netlify-%23000000.svg?style=flat-square&logo=netlify&logoColor=#00C7B7">
<br/>

## 🧩 폴더 구조
```
📦 src
┣ 📂assets
┃ ┣ 📂imgs
┃ ┗ 📜react.svg
┣ 📂components           // 주요 UI 컴포넌트 모음
┃ ┣ 📜TodoContext.tsx    // Todo 상태 관리용 Context API
┃ ┣ 📜TodoCreate.tsx     // 새로운 할 일 항목 추가 입력창
┃ ┣ 📜TodoHead.tsx       // 상단 날짜 및 남은 할 일 수 표시
┃ ┣ 📜TodoItem.tsx       // 개별 할 일 항목 표시 및 체크/삭제
┃ ┣ 📜TodoList.tsx       // 할 일 리스트 렌더링
┃ ┣ 📜TodoTemplate.tsx   // 전체 앱 레이아웃 템플릿
┃ ┗ 📜styles.css.ts      // 공통 스타일 정의 (vanilla-extract)
┣ 📜App.tsx
┣ 📜App.css.ts
┣ 📜main.tsx
┣ 📜index.css
┗ 📜vite-env.d.ts
```
<br/>

## 🎯 실행 방법

- **Node.js 18 이상 권장**

```bash
# 패키지 설치
npm install   # 또는 npm i

# 개발 서버 실행
npm start
```
<br/>

## 📍 홈페이지 주소
https://tubular-sherbet-6ac6c7.netlify.app/
