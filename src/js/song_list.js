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
            let {song,activeLi}=data
            let lilist=song.map((value)=>{
                let $li=$('<li></li>').text(value.song).attr("data-id",value.id)
                if(value.id===activeLi){
                    $li.addClass("active")
                }
                return $li
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
        },
        active(li){
            $(li).addClass('active').siblings(".active").removeClass('active')
        },
    }
    var model={
        data:{
            song:[],
            activeLi:""
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
                this.view.active(e.currentTarget)
                let mySong=this.model.data.song
                let myId=e.currentTarget.getAttribute("data-id")
                this.model.data.activeLi=myId
                console.log('activeli')
                console.log(this.model.data.activeLi)
                let mydata=JSON.parse(JSON.stringify({mySong,myId}))
                console.log(mydata)
                window.eventhub.emit('select',mydata)
                window.eventhub.on("new",()=>{
                    this.view.clearActive()
                })
                
            })
        },
        eventHub(){
            window.eventhub.on("create",(data)=>{
                this.model.data.song.push(data)
                this.model.data.activeLi=''
                this.view.render(this.model.data)    
            })
            window.eventhub.on("select",(data)=>{
                this.view.active()
            })
            window.eventhub.on("new",(data)=>{
                this.view.clearActive()
            })
            window.eventhub.on("update",(data)=>{
                let songs=this.model.data.song
                for(let i=0;i<songs.length;i++){
                    if(songs[i].id===data.id){
                        songs[i]=data
                        this.view.render(this.model.data)
                        break
                    }
                }
            })
        },
        getSongInfo(){
            this.model.getSong().then(()=>{
                this.view.render(this.model.data)
            })

        },

    }
    controller.init(view,model)
})()