<template lang="pug">
.list-wrapper(ref="wrapper")
  .scroll-content
    div(ref="listWrapper")
      slot
    slot(name="pullup" :pullUpLoadObj="pullUpLoadObj")
      .pullup-wrapper(v-if="pullup")
        .before-trigger(v-if="!isPullUpLoad")
          span {{pullUpTxt}}
        .after-trigger(v-else)
          loading
</template>

<script>
import BScroll from 'better-scroll'
import Loading from '@/components/Loading'

export default {
  components: {
    Loading
  },
  data () {
    return {
      isPullUpLoad: false,
      pullUpDirty: true
    }
  },
  props: {
    pullUpLoadObj: {
      type: null,
      default: false
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  computed: {
    pullUpTxt () {
      const moreTxt =
				(this.pullUpLoadObj &&
					this.pullUpLoadObj.txt &&
					this.pullUpLoadObj.txt.more) ||
				'正在加载...'

      const noMoreTxt =
				(this.pullUpLoadObj &&
					this.pullUpLoadObj.txt &&
					this.pullUpLoadObj.txt.noMore) ||
				'暂无更多数据'

      return this.pullUpDirty ? moreTxt : noMoreTxt
    }
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }

      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        pullUpLoad: this.pullUpLoadObj
      })

      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
        })
      }

      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.isPullUpLoad = true
            this.$emit('scrollToEnd')
          }
        })
      }

      if (this.pulldown) {
        this.scroll.on('touchend', pos => {
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    destroy () {
      this.scroll && this.scroll.destroy()
    },
    finishPullUp () {
      this.isPullUpLoad = false
      this.scroll && this.scroll.finishPullUp()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    forceUpdate (dirty) {
      this.pullUpDirty = dirty
      if (this.pullup && this.isPullUpLoad) {
        this.finishPullUp()
        this.refresh()
      } else {
        this.refresh()
      }
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.forceUpdate(true)
      }, this.refreshDelay)
    }
  }
}
</script>

<style lang="scss" >
.list-wrapper {
	position: relative;
	overflow: hidden;
	height: 100%;
	.scroll-content {
		position: relative;
		z-index: 1;
	}
}
.pullup-wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 16px 0;
}
</style>
