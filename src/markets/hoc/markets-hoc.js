import React, {Component} from 'react'

export function enhancer(){
    return (BaseComponent) => {
        return class extends Component{
            render(){
                return <BaseComponent {...this.props} {...this.state}></BaseComponent>
            }
        }
    }
}