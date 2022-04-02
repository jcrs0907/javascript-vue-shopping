import View from './View.js'

const tag = '[TabView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el){
  this.init(el);
  this.bindClickEvent();
  return this;
}

KeywordView.render = function(data = []){
  this.el.innerHTML = data.length ? this.getKeywordsHtml(data) : '추천 검색어가 없습니다'
  this.bindClickEvent()
  this.show()
}

//추천 검색어를 뿌려주는 메서드
KeywordView.getKeywordsHtml = function(data){
  return data.reduce((html, item, index) =>{
    html += `<li data-keyword="${item.keyword}"><span class="number">${index + 1}</span>${item.keyword}</li>`
    return html
  }, '<ul class="list">') + '</ul>'
}

KeywordView.bindClickEvent = function(){
  //li모음이 배열이 아닌 유사 배열이어서 Array.from을 사용해 array로 만들어준다.
  Array.from(this.el.querySelectorAll('li')).forEach(li=>{
    li.addEventListener('click', e => { this.onClickKeyword(e); });
  });
}

KeywordView.onClickKeyword = function(e){
  const {keyword} = e.currentTarget.dataset;
  this.emit('@click', keyword);

}

export default KeywordView