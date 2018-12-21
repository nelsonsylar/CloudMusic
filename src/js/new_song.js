export default (function new_song(){
    var view={
        el:'.newSong',
        template:`
            新建歌曲
        `,
        render:function(data){
            $(this.el).html(this.template)
        },
        find(selector){
            return $(this.el).find(selector)[0]
        }
    }
    var model={
        data:{}
    }
    var controller={
        view:null,
        model:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.view.render(this.model.data)
            this.active()
            this.bindEvents()
            this.eventHub()
        },
        eventHub(){
            window.eventhub.on('new',(data)=>{//这里把new事件存入eventhub,
                this.active()
            })
            window.eventhub.on('select',(data)=>{//这里把select事件存入eventhub,其他模块要用
                this.deactive()
            })
            // window.eventhub.on('submit',(data)=>{
            //     console.log("click")
            //     $(this.view.el).trigger("click");
            // })
        },
        bindEvents(){
            $(this.view.el).on('click',()=>{
                window.eventhub.emit('new')//这里把new事件方法从eventhub取出执行
            })
        },
        active(){
            $(this.view.el).addClass('active')

        },
        deactive(){
            $(this.view.el).removeClass('active')
        }
    }
    controller.init(view,model)
})()