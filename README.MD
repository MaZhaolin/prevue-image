# Preview Image Vue Plugin

### Install

```bash
npm  i -S prevue-image
```

### Usage

```javascript
import Vue from 'vue'
import PrevueImage from 'prevue-image'
Vue.use(PrevueImage)
```

html

```html
<div v-prevue-image>
  <img src="http://placekitten.com/408/287" alt="" />
  <img src="http://placekitten.com/408/287" alt="" />
  <img src="http://placekitten.com/408/287" alt="" />
</div>
```

### Browser

```html
<div id="app" v-prevue-image>
  <div style="text-align: center">
    <img src="http://placekitten.com/800/500" alt="" />
    <img src="http://placekitten.com/800/500" alt="" />
  </div>
  <div style="text-align: center">
    <img src="http://placekitten.com/800/600" alt="" />
    <img src="http://placekitten.com/800/600" alt="" />
  </div>
</div>
<script src="https://cdn.bootcss.com/vue/2.6.4/vue.js"></script>
<script src="/dist/prevue-image.js"></script>
<script>
  Vue.use(PrevueImage)
  new Vue({
    el: '#app'
  })
</script>
```

### License

The MIT License (MIT). Please see [License File](https://github.com/mazhaolin/prevue-image/blob/master/LICENSE.MD) for more information.
