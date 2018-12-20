import { format } from "util";

export default (function song_form(){
    let view={
        el:'main>.form-wrapper',
        template:`
        <h1>歌曲信息</h1>
                <form id=myform action="POST">
                    <div class="row">
                        <label for="">歌名</label><input type="text" name="song" value="__song__">
                    </div>
                    <div class="row">
                        <label for="">歌手</label><input type="text" name="singer" value="__singer__">
                    </div>
                    <div class="row">
                        <label for="">链接</label><input type="text" name="url" value="__url__">
                    </div>
                    <div class="row">
                        <input type="submit">
                    </div>
                </form>
        `,
        render(data={}){
            let placeHolders=['song','singer','url']
            let html=this.template
            placeHolders.map((value)=>{
                html = html.replace(`__${value}__`,data[value]||'')
            })
            $(this.el).html(html)
        },
        find(selector){
            return $(this.el).find(selector)
        }
    }
    let model={
        data:{
            song:"",
            singer:"",
            url:"",
            id:""
        },
        set(songData){
            var SaveSong = AV.Object.extend('playlist');
            var saveSong = new SaveSong();
            return saveSong.save({
                song: songData.song,
                singer:songData.singer,
                url:songData.url,
            }).then(function(submitInfo) {
                let {id,attributes}=submitInfo  //es6用法,将submitInfo里的id,attributes,赋值给id,attributes
                Object.assign(this.data,{id, ...attributes})//把后面的对象赋值给前面对象, ...attributes取出为变量
            }.bind(this))
        }
    }
    let controller={
        view:null,
        model:null,
        init(view,model){
            this.view=view
            this.model=model
            this.view.render(this.model.data)
            this.bindEvents()
            this.eventHub()
        },
        bindEvents(){
            $(this.view.el).on('submit','form',(event)=>{
                event.preventDefault()
                let needs='song singer url'.split(' ')
                let songData={}
                needs.map((value)=>{
                    songData[value]=$(this.view.el).find(`[name=${value}]`).val()
                })
                
                this.model.set(songData).then(()=>{
                    this.reset()
                    let string=JSON.stringify(this.model.data)
                    let mydata=JSON.parse(string)
                    window.eventhub.emit("create",mydata)
                })

            })
        },
        eventHub(){
            window.eventhub.on("upload",(data)=>{
                this.model.data=data
                this.view.render(this.model.data)
            })
            window.eventhub.on("select",(data)=>{
                let {mySong,myId}=data
                let modelData
                for(let i=0;i<mySong.length;i++){
                    if(mySong[i].id===myId)
                    modelData=mySong[i]
                }
                this.model.data=modelData
                this.view.render(this.model.data)
            })
            window.eventhub.on("new",(data)=>{
                this.view.render({})
            })
        },
        reset(){
            this.view.render({})
        }
    }
    controller.init(view,model)
   
}).call()