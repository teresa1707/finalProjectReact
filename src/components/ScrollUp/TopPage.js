import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const TopPage = (props) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{props.children}</>
}
