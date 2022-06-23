import {useState, useCallback, useEffect} from "react";

 export function ScrollControl() {
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
    const [top, setTop] = useState(false);
    const [smallScreen, isSmallScreen] = useState(false);
    const onAdvertisementScroll = useCallback(() => {
        console.log(window.innerWidth, "innerwidth")
        const advertisementElement = document.getElementById("advertisement");
        if(window.innerWidth <= 768) {
            isSmallScreen(true);
        }else {
            isSmallScreen(false);
            isReachedBottom(advertisementElement?.scrollHeight - window.scrollY < 550)
            setTop(window.scrollY > 36)
        }

    }, [reachedBottom, top, smallScreen]);
    useEffect(() => {
        window.addEventListener("scroll", onAdvertisementScroll);
        return () => {
            window.removeEventListener("scroll", onAdvertisementScroll);
        };
    }, [onAdvertisementScroll])



    return {reachedBottom, top, smallScreen};

}

