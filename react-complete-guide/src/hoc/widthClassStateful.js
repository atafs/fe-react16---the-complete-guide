import React, { Component } from 'react'

const widthClassStateful = (WrappedComponent, className) => {
    const WidthClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent 
                        {...this.props}
                        ref={this.props.forwardRef}
                    />
                </div> 
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WidthClass {...props} forwardedRef={ref} />
    })
}

export default widthClassStateful