import FriendsTemplate from './friends-template.ejs'

export default class Friends extends Backbone.View {
    constructor(attrs){
        super(attrs);
        debugger;
    }

    get tagName(){
        return 'friendsDiv'
    }

    get template() {
        return FriendsTemplate
    }

    initialize(){
        this.render()
    }

    render(){
        
    }

}