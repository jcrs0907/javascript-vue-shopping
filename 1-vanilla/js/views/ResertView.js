import View from './View.js';

const tag = '[ResertView]'

//Object.create란?
const ResertView = Object.create(View);

//ResertView 관련 메세지 모음
ResertView.messages = {
  NO_RESULT : '검색 결과가 없습니다'
}

ResertView.setup = function(el){
  this.init(el);
}
//메인컨트롤러에서 render 함수를 호출해야 한다.
ResertView.render = function(data  = []){
  console.log(tag, 'render()', data);
  this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : this.messages.NO_RESULT
}

ResertView.getSearchResultHtml = function(data){
  //html 문자열 리턴용 함수
  //data가 컬렉션이어서 reduce 함수 이용
  return data.reduce((html, item) => {
    html+=this.getSearchItemHtml(item)
    return html
  //초기값으로 ul넘겨주고 함수 끝나고 ul 닫아준다
  },'<ul>')+ '</ul>'
}

//검색결과 안에 하나의 아이템 image, name을 넣어서 리턴
ResertView.getSearchItemHtml = function(item){
return `<li>
  <img src="${item.image}">
  <p>${item.name}</p>
</li>`
}

export default ResertView