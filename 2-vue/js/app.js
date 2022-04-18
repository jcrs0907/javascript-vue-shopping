import SearchModel from './models/SearchModel.js';
import KeywordModel from './models/KeywordModel.js'


new Vue({
  el : '#app',
  data: {//view의 기본 값을 설정할 수 있음
    query:'',//입력 데이터 받아서 저장
    // msg : 'hello world'
    submitted: false,//기본 보내진 상태
    tabs:['추천 검색어','최근 검색어'],
    selectedTab:'',
    //검색 결과 구현
    searchResult:[],
    keywords: [],
  },
  created(){//vue lifeCycle 뷰 인스턴스가 생성될 때
    //data에서 selectedTab에 설정해주는 것과 같다
    //중복 제거를 위해 created()안에 추가
      this.selectedTab = this.tabs[0]// 0번 index는 추천검색어   
      this.fetchKeyword()//추천검색어 데이터 가져오기   
  },
  methods:{
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
    onClickTab(tab){
      this.selectedTab = tab
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search()
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
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
    }
  }

})