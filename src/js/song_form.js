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
            id:"",
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
        },
        update(Data){
            // 第一个参数是 className，第二个参数是 objectId
            var todo = AV.Object.createWithoutData('playlist',this.data.id);
            // 修改属性
            todo.set('song', this.data.song);
            todo.set('singer', this.data.singer);
            todo.set('url', this.data.url);
            // 保存到云端 
            return todo.save().then((response)=>{
                Object.assign(this.data, Data)
                return response
              })
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
                    this.model.data[value]=songData[value]
                })
                if(this.model.data.id){//如果存在则更新   id来自select事件
                    this.model.update(songData).then(()=>{
                        let string=JSON.stringify(this.model.data)
                        let mydata=JSON.parse(string)
                        window.eventhub.emit("update",mydata)
                    })
                }else{//id不存在则新建 
                    this.model.set(songData).then(()=>{
                        this.reset()
                        let string=JSON.stringify(this.model.data)
                        let mydata=JSON.parse(string)
                        window.eventhub.emit("create",mydata)
                        console.log(mydata)
                        this.model.data.id=""   
                    })  
                } 
                
            })
        },
        eventHub(){
            window.eventhub.on("select",(data)=>{
                let {mySong,myId}=data
                let modelData
                for(let i=0;i<mySong.length;i++){
                    if(mySong[i].id===myId)
                    modelData=mySong[i]
                }
                this.model.data=modelData
                this.view.render(this.model.data)
                $(this.view.el).find("h1").text("编辑歌曲")
            })
            window.eventhub.on("new",(data)=>{
                if(this.model.data.id){//这是点击新建歌曲触发new_song时,id存在则清空form上的数据
                    this.model.data={}
                }else{ 
                    this.model.data=data //这是上传歌曲结束后,id不存在则显示上传的信息
                }    
                this.view.render(this.model.data)
            })

        },
        reset(){
            this.view.render({})
        }
    }
    controller.init(view,model)
   
}).call()