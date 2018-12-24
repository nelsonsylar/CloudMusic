export default (function page_index(){
    let view={
        el:'.tabs',

    }
    let model={}
    let controller={
        init(view,model){
            this.view=view
            this.model=model
            this.bindEvents()
           
        },
        bindEvents(){
            $(this.view.el).find('ul').on('click','li',(e)=>{
                let $li=$(e.currentTarget)
                let tabs=$li.attr('data-tabs')
                this.active($li)
                window.eventhub.emit('selectTabs',tabs)
            })
        },
        active($li){
            $li.addClass('active').siblings('.active').removeClass('active')
        },
    }
    controller.init(view,model)
}).call() 