<template>
    <div>
        <input type="checkbox" id="toggle" class="offscreen" :checked="status" @change="switchChange()"/>
        <label for="toggle" class="switch" :class="`switch-${theme}`" :onText="onText" :off-text="offText"></label>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'Switcher',
        props:{
            onText:{
                type:String,
                default:''
            },
            offText:{
                type:String,
                default:''
            },
            theme:{
                type:String,
                default:'success'
            },
            status:{
                type:Boolean,
                default:false
            }
        },
        data () {
            return {
                switchStatus: this.status
            }
        },
        mounted(){
            //不应该直接操作props里的值
            this.switchStatus = this.status
        },
        methods:{
            switchChange () {
                this.switchStatus = !this.switchStatus
                this.$emit('update:status',this.switchStatus)
            }
        }
    }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.switch
  position relative
  display inline-block
  width 50px
  height 20px
  background-color rgba(0, 0, 0, 0.25)
  border-radius 20px
  transition all 0.3s
  &::after
    content attr(off-text)
    position absolute
    width 18px
    height 18px
    border-radius 18px
    background-color white
    top 1px
    left 1px
    transition all 0.3s
    text-indent 22px
    font-size 12px
    line-height:18px
    color:white
input[type='checkbox']
  display none
input[type='checkbox']:checked
  & + .switch::after
    left 11px
    transform translateX(20px)
    content attr(onText)
    text-indent -20px
    font-size 12px
    line-height 18px
    color #FFF
  & + .switch
    background-color #a9cc29

.offscreen
  position absolute
//   left -9999px
</style>

