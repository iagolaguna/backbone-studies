import { View } from "backbone";

export class AppView extends View{

    constructor(props){
        super(props);
    }

    get el(){
        return '#container';
    }

    initialize(){
        this.render();
    }

    render (){
        this.$el.html('Hello world11');
        return this;
    };
}

