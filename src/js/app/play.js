export default (function play(){
    let view={
        el:`.player`,
        template:`
        <audio src="{{url}}" controls></audio>
        <button id=play>play</button>
        <button id="pause">pause</button>
        `,
        // render(data){
        //     let $content=$(this.template.replace('{{url}}',data.url))
        //     $(this.el).html($content)
        // }
    }
    let model={
        data:{},
        getSong(id){
            var query = new AV.Query('playlist');
            return query.get(id).then( (song)=> {
                Object.assign(this.data,{id:song.id,...song.attributes})
                return song
            }, function (error) {
              // 异常处理
            });
        }
    }
    let controller={
        init(view,model){
            this.view=view;
            this.model=model;
            
            let id =this.getId()
            this.model.getSong(id).then(()=>{
                // this.view.render(this.model.data)
            })
            this.bindEvents()
        },
        getId(){
            let id=window.location.search
            if(id.indexOf("?")===0){
                id=id.substr(1)
            } 
            id=id.split('&').filter(a=>a)
            let newId
            for(let i = 0 ;i<id.length;i++){
                let base=id[i].split('=')
                let key=base[0]
                let value=base[1]
                if(key==='id'){
                    newId=value
                    break
                }
            }
            return newId
        },
        bindEvents(){
            $(this.view.el).on('click','button#play',()=>{
                console.log(1)
                this.play()
                
            })
            $(this.view.el).on('click','button#pause',()=>{
                this.pause()
            })
        },
        play(){
            console.log(this.a)
            $(this.view.el).find("audio")[0].play()
        },
        pause(){
            $(this.view.el).find("audio")[0].pause()
        }
    }
    controller.init(view,model)
})()