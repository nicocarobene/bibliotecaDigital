
const checkNavigation=()=>Boolean(document.startViewTransition)

const fetchNextPage=async({toUrl}:{toUrl:string})=>{
    const response= await fetch(toUrl)
    const html= await response.text() 
    const [,data]= html.match(/<body[^>]*>([\s\S]*)<\/body>/i)??[]
    return data;
}
const renderPage=({data}:{data: string })=>{
    const contentElement = document.getElementById("content")
    if(!contentElement)return
    contentElement.innerHTML= data
    document.documentElement.scrollTo(0,0)
}

export const viewTransition=()=>{
    if(!checkNavigation())return

    document.startViewTransition
        window.navigation.addEventListener("navigate",(event)=>{
        const toUrl= new URL(event.destination.url)
        if(window.location.origin !== toUrl.origin)return

        event.intercept({
            async handler(){
            const data= await fetchNextPage({toUrl: toUrl.pathname});
            document.startViewTransition(()=>{
                renderPage({data})   
            })
        }
    })
})
}