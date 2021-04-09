function addListener(elem, callback) {
  const listeners = elem.__resize_listeners__

  if (!listeners) {
    elem.__resize_listeners__ = []
    if (window.MutationObserver) {
      console.log('进入MutationObserver')
      callback(elem)
      const observer = new MutationObserver((mutationList, observer) => {
        console.log('触发MutationObserver')
        runCallbacks(elem)
      })
      elem.__resize_observer__ = observer
      const config = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      }
      observer.observe(elem, config)
    } else if (window.ResizeObserver) {
      console.log('进入ResizeObserver')
      const ro = new ResizeObserver(() => {
        console.log('触发ResizeObserver')
        runCallbacks(elem)
      })
      elem.__resize_observer__ = ro
      ro.observe(elem)
    } else {
      console.log('直接callback')
      callback()
    }
  }
  elem.__resize_listeners__.push(callback)
}

function removeListener(elem, callback) {
  console.log('销毁')
  const listeners = elem.__resize_listeners__
  if (!listeners) {
    return
  }

  if (callback) {
    listeners.splice(listeners.indexOf(callback), 1)
  }

  // no listeners exist, or removing all listeners
  if (!listeners.length || !callback) {
    console.log('销毁1')
    if (elem.__resize_observer__) {
      console.log('销毁2')
      if (window.ResizeObserver) {
        console.log('销毁3')
        elem.__resize_observer__.unobserve(elem)
      }
      elem.__resize_observer__.disconnect()
      elem.__resize_observer__ = null
    } else {
      console.log('销毁4')
      elem.__resize_observer__.disconnect()
    }
    elem.__resize_listeners__ = null
  }
}

function runCallbacks(elem) {
  if (!elem || !elem.__resize_listeners__) {
    return
  }
  elem.__resize_listeners__.forEach(callback => {
    callback.call(elem, elem)
  })
}

export { addListener, removeListener }
