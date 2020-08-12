import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function (e) {
  const enter = 13 //enter키는 13 이다
  this.showResetBtn(this.inputEl.value.length)
  if(e.keyCode !== enter) return
  //검색 결과가 보인다. (formView는 검색결과를 보여주지 않아도 된다. mainController로 전달 해야한다.)
  this.emit('@submit', {input: this.inputEl.value}) // mainController로 input의 value값을 준다.
}

export default FormView