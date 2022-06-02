# :pushpin: ToDoList
> React.js로 만든 간단한 Todolist 프로젝트 입니다.

</br>

## 1. 제작 기간 & 참여 인원
- 2022년 05월 12일 ~ 05월 17일
- 팀 프로젝트 참여인원 4명

</br>

## 2. 사용 기술
- React.js 17.0.0
- Typescript
- redux 4.2.0
- Material UI
- axios
- react-cookie

</br>

## 3. 폴더 구조
```text
src
├── Asset (프로젝트에서 사용될 이미지 파일들 저장)
├── components
|   ├── common ( 2개 이상의 컴포넌트에 의해 참조되는 경우 )
|   |   └── ...
|   └── ... 
├── hooks (커스텀 hook들)
├── layouts (페이지의 공통 레이아웃)
|   ├── App.tsx (페이지들이 라우팅되는 곳)
|   └── ...
├── pages
|   ├── common ( 컴포넌트에서 사용되는 style에 적용하기 위한 css변수 )
|   |   └── ...
|   ├── fonts ( 사이트에 적용된 fonts )
|   |   └── ...
|   └── ...
├── store (redux에서 관리하는 데이터)
|   └── ...
├── utils (tjs 모듈들이 담긴 폴더)
|   └── ...
├── client.tsx (프로젝트 시작점)
├── package.json
└── README.md
```


## 4. 핵심 기능

### 4.1. 로그인 후 Token 쿠키에 저장 :pushpin: [코드확인](https://github.com/coa2769/Simple-ToDoList/blob/main/pages/SignIn/index.tsx)
로그인이 정상적으로 완료되었을 때 서버에서 보내주는 Token 값을 쿠키에 저장하기 위해 react-cookie 패키지를 사용한다. 

![로그인 화면](/00%20%ED%99%94%EB%A9%B4%20%EC%9D%B4%EB%AF%B8%EC%A7%80/%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%ED%99%94%EB%A9%B4.png)

### 4.2. get으로 서버에서 Todolist 가져오기 :pushpin: [코드확인](https://github.com/coa2769/Simple-ToDoList/blob/main/pages/Todo/index.tsx)
처음 Todo 페이지를 로드 했을 때 서버에서 Todolist를 가져온다.

### 4.3. Todo 목록 추가, 수정, 삭제, 완료
![todolist](/00%20%ED%99%94%EB%A9%B4%20%EC%9D%B4%EB%AF%B8%EC%A7%80/TodoList.png)


- **Redux로 Todolist 데이터 관리** :pushpin: [코드확인](https://github.com/coa2769/Simple-ToDoList/blob/main/store/index.ts)
    - 각 Todo는 0~99사이의 랜덤한 값을 id로 갖는다.
    - 모든 todo를 한꺼번에 관리하며 done에 따라 완료 여부를 나타며 출력할 때 해당 값을 이용한다.


</div>
</details>

</br>
