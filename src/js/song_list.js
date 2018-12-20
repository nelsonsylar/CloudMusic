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
               return $('<li></li>').text(value.song).attr("data-id",value.id)
            })
            lilist.map((lidom)=>{
                $(this.el).find('ul').append(lidom)
            })
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
        },
        getSong(){
            var query = new AV.Query('playlist');
            return query.find().then((playlist)=> {
                this.data.song=playlist.map((playlist)=> {
                    let {id,attributes}=playlist
                    return {id,...attributes}
              })
              return playlist
            })
        }
    }
    var controller={
        view:null,
        model:null,
        init(view,model){
            this.view=view
            this.model=model
            this.view.render(this.model.data)
            this.eventHub()
            this.bindEvents()
            this.getSongInfo()
        },
        bindEvents(){
            $(this.view.el).on("click","li",(e)=>{
                this.active(e.currentTarget)
                let mySong=this.model.data.song
                let myId=e.currentTarget.getAttribute("data-id")
                window.eventhub.emit('select',{mySong,myId})
                window.eventhub.on("new",()=>{
                    this.view.clearActive()
                })
            })
        },
        eventHub(){
            window.eventhub.on("create",(data)=>{
                this.model.data.song.push(data)
                this.view.render(this.model.data)
            })
            window.eventhub.on("select",(data)=>{
                this.active()
            })
            window.eventhub.on("new",(data)=>{
                this.view.clearActive()
            })
        },
        getSongInfo(){
            this.model.getSong().then(()=>{
                this.view.render(this.model.data)
            })

        },
        active(li){
            $(li).addClass('active').siblings(".active").removeClass('active')
        },
    }
    controller.init(view,model)
})()