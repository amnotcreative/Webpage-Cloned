import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Dropdown as Dropdown2 } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { usebodyCb, useFlex28Cb, useDiv36Cb, useDiv37Cb, useFlex30Cb, useDiv39Cb, useImage31Cb, useDropdown8Cb, useTextBox62Cb, useTextBox63Cb, useTextBox64Cb, useImage32Cb, useTextBox69Cb, useImage34Cb, useTextBox67Cb, useTextBox68Cb } from "../page-cbs/trial";
import "../page-css/trial.css"

export default function Trial() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const bodyProps = useStore((state)=>state["trial"]["body"]);
const bodyIoProps = useIoStore((state)=>state["trial"]["body"]);
const bodyCb = usebodyCb()
const Flex28Props = useStore((state)=>state["trial"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["trial"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Div36Props = useStore((state)=>state["trial"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["trial"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Div37Props = useStore((state)=>state["trial"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["trial"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Flex30Props = useStore((state)=>state["trial"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["trial"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Div39Props = useStore((state)=>state["trial"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["trial"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Image31Props = useStore((state)=>state["trial"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["trial"]["Image31"]);
const Image31Cb = useImage31Cb()
const Dropdown8Props = useStore((state)=>state["trial"]["Dropdown8"]);
const Dropdown8IoProps = useIoStore((state)=>state["trial"]["Dropdown8"]);
const Dropdown8Cb = useDropdown8Cb()
const TextBox62Props = useStore((state)=>state["trial"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["trial"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["trial"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["trial"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox64Props = useStore((state)=>state["trial"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["trial"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image32Props = useStore((state)=>state["trial"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["trial"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox69Props = useStore((state)=>state["trial"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["trial"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Image34Props = useStore((state)=>state["trial"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["trial"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox67Props = useStore((state)=>state["trial"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["trial"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["trial"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["trial"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()

  return (<>
  <Flex2 className="p-trial body" {...bodyProps} {...bodyCb} {...bodyIoProps}>
<Flex2 className="p-trial Flex28" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Div2 className="p-trial Div37" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<Image2 className="p-trial Image32" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Div2>
<Div2 className="p-trial Div36" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<TextBox2 className="p-trial TextBox64" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox2 className="p-trial TextBox63" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<TextBox2 className="p-trial TextBox62" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<Dropdown2 className="p-trial Dropdown8" {...Dropdown8Props} {...Dropdown8Cb} {...Dropdown8IoProps}/>
<Image2 className="p-trial Image31" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-trial Flex30" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Div2 className="p-trial Div39" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<TextBox2 className="p-trial TextBox68" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Image2 className="p-trial Image34" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<TextBox2 className="p-trial TextBox67" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Div2>
<TextBox2 className="p-trial TextBox69" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex2>
</Flex2>
  </>);
}
