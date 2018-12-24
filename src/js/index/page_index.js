export default (function page_index(){
    let view={
        el:`.tabIndex`,
        show(){
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
                if(tabs==='first'){
                    this.view.show()
                }else{
                    this.view.hide()
                }
            })
        },
    }
    controller.init(view,model)
})()