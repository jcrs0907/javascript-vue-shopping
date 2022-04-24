export default{
  template : '#list',
  props: ['data', 'type'],
  computed:{//일종의 함수, 변수처럼 사용가능
    keywordType(){
      return this.type === 'keywords'
    },
    historyType(){
      return this.type === 'history'
    }
  },
  methods:{
    onClickList(keyword){
      this.$emit('@click',keyword)
    },
    onRemoveList(keyword){
      this.$emit('@remove',keyword)
    }
  }
}