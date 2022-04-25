# 실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발
바닐라 자바스크립트와 VueJS 각각 이용하여 쇼핑몰을 만들어 보며 차이를 이해하는 것을 목표로 한다.
(https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/dashboard)

## 기간
2022.02.01 ~ 2022.04.25

## 개발 환경
- Language: Javascript, html, css
- Front-end library: vue.js(vue2)

## 폴더 구조 및 내용
* 1-vanilla: 바닐라 자바스크립트를 이용한 MVC 패턴의 쇼핑몰 구성
* 2-vue: index.html, app.js, models
* 3-component: index.html(template으로 변경), components(각각의 컴포넌트.js), app.js 를 이용해 부모 인스턴스, 자식 인스턴스 vue 환경 이해한다.
* 4-single-file-component: vue cli를 설치해 단일 컴포넌트(vue 파일)로 변경한다.
```bash
├── 1-vanilla
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── MainController.js
│   │   ├── models
│   │   │   ├── HistoryModel.js
│   │   │   ├── KeywordModel.js
│   │   │   └── SearchModel.js
│   │   └── views
│   │       ├── FormView.js
│   │       ├── HistoryView.js
│   │       ├── KeywordView.js
│   │       ├── ResultView.js
│   │       ├── TabView.js
│   │       └── View.js
│   └── style.css
├── 2-vue
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   └── models -> ../../1-vanilla/js/models
│   └── style.css -> ../1-vanilla/style.css
├── 3-component
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   ├── components
│   │   │   ├── FormComponent.js
│   │   │   ├── ListComponent.js
│   │   │   ├── ResultComponent.js
│   │   │   └── TabComponent.js
│   │   └── models -> ../../1-vanilla/js/models
│   └── style.css -> ../1-vanilla/style.css
├── 4-single-file-component#vue-cli 설치
│   ├── README.md
│   ├── index.html
│   ├── models -> ../1-vanilla/models
│   ├── node_modules
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   └── logo.png
│   │   ├── components#vue로 변경
│   │   │   ├── FormComponent.vue
│   │   │   ├── ListComponent.vue
│   │   │   ├── ResultComponent.vue
│   │   │   └── TabComponent.vue
│   │   ├── main.js
│   │   └── models -> ../../1-vanilla/js/models
│   ├── style.css -> ../1-vanilla/style.css
│   └── webpack.config.js
```

## vue cli 설치 및 실행
```
#4-single-file-component 아래에 webpack-simple template  설치
cd 4-single-file-component
vue init webpack-simple
npm install vue-cli

##npm install
npm install

#localhost:8080로 실행
npm run dev
```

## 구현 화면
![image](https://user-images.githubusercontent.com/64838115/165011040-3813f5e6-3636-41ee-9cb2-dcb2f828e77d.png)
![image](https://user-images.githubusercontent.com/64838115/165010964-052ce0aa-5cf6-4435-bfe7-bf8c583d78e3.png)


