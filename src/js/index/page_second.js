export default (function page_second(){
    let view={
        el:`.tabSecond`,
        show(){
            console.log('show')
            console.log($(this.el))
            $(this.el).addClass('active')
        },
        hide(){
            $(this.el).removeClass('active')
        }
    }
    let model={}
    let controller={
        init(view,model){
            this.view=view
            this.model=model
            this.eventHub()
        },
        eventHub(){
            window.eventhub.on('selectTabs',(tabs)=>{
                if(tabs==='second'){
                    this.view.show()
                    console.log(1)
                }else{
                    this.view.hide()
                }
            })
        },
    }
    controller.init(view,model)
})()