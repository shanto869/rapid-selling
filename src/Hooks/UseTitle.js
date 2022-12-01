import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Repid Reselling`;
    }, [title])
}

export default useTitle;