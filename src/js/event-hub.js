export default (function event_hub(){
    //这里可以与addEventListenner作对比
    //有了eventhub,不同模块之间就能相互响应
    window.eventhub={
        events:{
            //这里写各种事件对象,事件对象为内的内容为数组,里面包含方法
            //如xxx.addEventListenner('on',function(){...})
            //再比如on:[]
        },
        //事件订阅,即存相应事件的相应方法,当调用emit时,最终还是会带on执行
        on(eventName,fn){
            if(this.events[eventName]===undefined){
                this.events[eventName]=[]
            }
            this.events[eventName].push(fn)
        },
        //事件发布,即读取相应事件的相应方法
        emit(eventName,data){
            for(let key in this.events){
                if(key===eventName){
                    let fnlist=this.events[key]
                    fnlist.map((fn)=>{
                        fn(data)
                    })
                }
            }
        }
    }
})()