import React from 'react'



const withChildFuntion = (fun) => (Wrapped) => {

    return (props) => {
        return (
            <Wrapped {...props}>
                {fun}
            </Wrapped>
        )
    }
}

export default withChildFuntion