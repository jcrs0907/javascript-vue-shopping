import FormView from '../views/FormView.js'
import ResertView from '../views/ResertView.js'
import SearchModel from '../models/SearchModel.js'


const tag = '[MainController]'

export default {
  //컨트롤러에서 FormView의 Form의 상태 변화를 체크 
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    ResertView.setup(document.querySelector('#search-result'))
  },

  search(query){
    console.log(tag, 'search()', query)
    //list함수는 promise을 반환하기 때문에 then을 사용할 수 있다.
    SearchModel.list(query).then(data => {
      this.onSearchResult(data);
    });
    
  },
  
  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input);
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    ResertView.hide()
  },

  onSearchResult(data){
    ResertView.render(data);
  },
}