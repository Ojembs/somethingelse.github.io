import {Route} from './route.js'

export class Router{

    construction(){
        this.mode = 'history'
        this.routes = []
        this.root = '/'
    }
    get root(){
        return this._root   
    }
    set root(val){
        this._root = val
    }
    
    get mode(){
        return this._mode   
    }
    set mode(val){
        this._mode = val
    }
    
    get routes(){
        return this._routes   
    }
    set routes(val){
        this._routes = val
    }
    add(route){
        this.routes.push(new Route(route.name, route.path, route.handler))
        return this
    }
    navigate(route){
        route = route ? route : ''
        this.match(route)
    }
    match(route){
        for(var i = 0; i < this.routes.length; i++){
            let paramNames = []
            let regexpath = this.routes[i].path.replace(/([:*])(\w+)/g, function (full, colon, name){
                paramNames.push(name)
                return '([^\/]+)';
            }) + '(?:\/|$)';

            let routeMatch = route.match(new RegExp(regexpath))
            if (routeMatch !== null){
                var params = routeMatch
                .slice(1, routeMatch, length)
                .reduce((param, vakue, index) => {
                    if (params === null) param = {};
                    params[paramNames[index]] = value;
                    return params;
                }, null);
                if (param === null){
                    this.routes[i].handler()
                }
                else{
                    this.routes[i].handler(params)
                }
                this.location(route)
            }
        }
    }
    location(route){
        if (this.mode === 'history'){
            window.history.pushState(null, null, this.route + route)
        }
        else{
            route = route.replace(/^\//, '').replace(/\/$/, '')
            window.location.href = window.location.href.replace(/#(,*)$/, '') + '#' + route
        }
    }
}
