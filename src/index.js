import ImagePreview from './ImagePreview.vue'

export default {
  install(Vue) {
    const directive = {
      inserted: function(el, binding) {
        el.addEventListener('click', function({ target }) {
          if (target.tagName === 'IMG') {
            const box = document.createElement('div')
            const props = { img: target }
            const ins = new Vue({
              el: box,
              render: h => <ImagePreview {...{ props }} />
            })
            document.body.appendChild(ins.$el)
          }
        })
      }
    }
    Vue.directive('prevue-image', directive)
  }
}
