export default (function song_list(){
    var view={
        el:'.songList',
        template:`
        <ul>
        </ul>
        `,
        render(data){
            $(this.el).html(this.template)
            $(this.el).find('ul').empty()
            let {song}=data
            let lilist=song.map((value)=>{
               return $('<li></li>').text(value.song)
            })
            lilist.map((lidom)=>{
                $(this.el).find('ul').append(lidom)
            })
            console.log(lilist)
            console.log('render done')
        },
        find(selector){
            return $(this.el).find(selector)[0]
        },
        clearActive(){
            $(this.el).find('.active').removeClass("active")
        }
    }
    var model={
        data:{
            song:[]
        }
    }
    var controller={
        view:null,
        model:null,
        init(view,model){
            this.view=view,
            this.model=model,
            this.view.render(this.model.data)
            window.eventhub.on("create",(data)=>{
                this.model.data.song.push(data)
                this.view.render(this.model.data)
            })
            this.bindEvents()
            window.eventhub.on("upload",(data)=>{
                this.view.clearActive()
            })
            window.eventhub.on("select",(data)=>{
                this.active()
            })

            
        },
        bindEvents(){
            $(this.view.el).on("click","li",(e)=>{
                this.active(e.currentTarget)
                window.eventhub.emit('select')
                window.eventhub.on("new",()=>{
                    this.view.clearActive()
                })
            })
        },
        active(li){
            $(li).addClass('active').siblings(".active").removeClass('active')
        },
    }
    controller.init(view,model)
})()