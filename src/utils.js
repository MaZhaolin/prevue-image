export const extendStyle = (to, _from) => {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

const cached = fn => {
  let cache = undefined
  return () => {
    return typeof cache === 'undefined' ? (cache = fn()) : cache
  }
}

export const hasScrollbar = () => {
  return (
    document.body.scrollHeight >
    (window.innerHeight || document.documentElement.clientHeight)
  )
}

export const getScrollbarWidth = cached(() => {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText =
    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
})
