(()=>{


    class Accordion{

        constructor(obj){
            const $elm=document.getElementById(obj.hookName)
            const $trigger=$elm.getElementsByTagName(obj.tagName)

            let index=0;
            const triggerLen=$trigger.length;
            while(index<triggerLen){
                $trigger[index].addEventListener('click',(e)=>this.clickHandler(e));
                index++;
            }
        }

        clickHandler(e){
            e.preventDefault();
            const $target=e.currentTarget;
            const $content=$target.nextElementSibling;

            if($content.style.display=="block"){
                $content.style.display="none"
            }else{
                $content.style.display="block"
            }
        }
    }

    const dummyAccordion=new Accordion({
        hookName:"js-accordion",
        tagName:"p"
    })
    const fuckingAccordion=new Accordion({
        hookName:"js-faq",
        tagName:"a"
    })
    const miniAccordion=new Accordion({
        hookName:"js-accordion-mini",
        tagName:"dt"
    })

})();
