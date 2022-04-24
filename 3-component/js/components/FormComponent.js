export default {
  template: '#search-form',
  props:['value'], //부모 인스턴스와 자식 인스턴스를 props를 이용하여 연결
  data() {
    return {
      inputValue : this.value
    }
  },
  watch:{//view 모델 감시하고 있다가 감시하던 값이 변경되면 아래 함수 실행
    value(newVal, oldVal){
      this.inputValue = newVal
    }
  },
  methods: {
    onSubmit() {//자식 인스턴스에서 부모 인스턴스로 받은 데이터 연결
      //데이터를 받을 경우 app.js에서 @submit이 실행 후 onSubmit 이벤트가 발생
      //template에서 연결
      this.$emit('@submit', this.inputValue.trim());
    },
    onKeyup() {
      if (!this.inputValue.length) this.onReset()
    },
    onReset() {
      this.inputValue = ''
      this.$emit('@reset')
    }
  }
}