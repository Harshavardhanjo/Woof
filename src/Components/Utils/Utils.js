import React, { useState ,useEffect} from 'react'
import { useStateValue } from '../../StateProvider'
import Tags from '../Tags/Tags'
import Error from '../Error/Error'
import Messages from '../Messages/Messages'
import Pets from '../Pets/Pets'
import About from '../About/About'

const Utils = () => {


    const [{selectedUtil},dispatch] = useStateValue()
    const [tagComp,setTagcomp] = useState()
    const [messagescomp, setMessagescomp] = useState()
    const [aboutcomp, setAboutcomp] = useState()
    const [petscomp, setPetscomp] = useState()

    useEffect(() => {
    }, [tagComp])

    useEffect(() => {
        if(selectedUtil == "tags")
        {
            console.log("Utils",selectedUtil)
            setTagcomp(true)
            setAboutcomp(false)
            setMessagescomp(false)
            setPetscomp(false)
        }

        else if(selectedUtil == "About")
        {
            console.log("Utils",selectedUtil)
            setAboutcomp(true)
            setTagcomp(false)
            setMessagescomp(false)
            setPetscomp(false)
        }

        else if(selectedUtil == "Messages")
        {
            console.log("Utils",selectedUtil)
            setMessagescomp(true)
            setTagcomp(false)
            setAboutcomp(false)
            setPetscomp(false)
        }

        else if(selectedUtil == "Pets")
        {
            setPetscomp(true)
            setTagcomp(false)
            setAboutcomp(false)
            setMessagescomp(false)
        }
    }, [selectedUtil])




    return (
        <div>
            {tagComp ? (<Tags/>) : aboutcomp ? (<About/>) : messagescomp ? (<Messages/>) : petscomp ? (<Pets/>) : <Error/>}
        </div>
    )
}

export default Utils
