import {useState, useCallback, useEffect} from "react";

 export function HeaderScrollControl() {
     const [shadow, setShadow] = useState(false);
     const [position, setPosition] = useState("absolute");

     const onScroll = useCallback((event) => {
         if (window.scrollY < 76) {
             setPosition("absolute");
             setShadow(false);
         }
         else if (window.scrollY > 36) {
             setShadow(true);
             setPosition("fixed");
         }
     }, [shadow, position]);
     useEffect(() => {
         window.addEventListener("scroll", onScroll);
         return () => {
             window.removeEventListener("scroll", onScroll);
         };
     }, [onScroll])

    return {shadow, position};

 }

export function AdvertisementScrollControl() {
    const [reachedBottom, isReachedBottom] = useState(false);

    const onAdvertisementScroll = useCallback(() => {
        const advertisementElement = document.getElementById("advertisement");
        console.log(advertisementElement?.scrollHeight - window.scrollY);
        if(advertisementElement?.scrollHeight - window.scrollY < 550) {
            isReachedBottom(true);
        }
        else {
            isReachedBottom(false)
        }
    }, [reachedBottom]);
    useEffect(() => {
        window.addEventListener("scroll", onAdvertisementScroll);
        return () => {
            window.removeEventListener("scroll", onAdvertisementScroll);
        };
    }, [onAdvertisementScroll])



    return reachedBottom;

}

