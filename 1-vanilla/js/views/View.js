const tag = '[View]'

export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  on(event, handler) { //onrhk emit을 함께 봐야한다 event와 handler가 인자로 event로 받으면 handler가 작동
    this.el.addEventListener(event, handler)
    return this
  },

  emit(event, data) { //스스로 이벤트를 방출
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt) //dispatchEvent?
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
}