import SearchModel from './models/SearchModel.js';

new Vue({
  el : '#app',
  data: {
    //입력 데이터 받아서 저장
     //view의 기본 값을 설정할 수 있음
    query:'',
    // msg : 'hello world'
    // 기본 보내진 상태
    submitted: false,
    //검색 결과 구현
    searchResult:[]
  },methods:{
    onSubmit(e){
      //onSubmit은 화면 갱신이 되기 때문에 갱신을 막는 설정을 추가 해야한다. => html에서 prevent 추가

       //input이 submit 될 경우 search 함수 실행
       this.search()
    },
    onKeyup(e) {
      if (!this.query.length) this.resetForm()
    },
    onReset(e) {
      this.resetForm()
    },
    search(){
      SearchModel.list().then(data =>{
        this.submitted = true
        this.searchResult = data
      });
    },
    resetForm() {
      this.query = ''
      this.submitted = false
      this.searchResult = []
      // todo remove results ..
      // debugger
    }
  }

})