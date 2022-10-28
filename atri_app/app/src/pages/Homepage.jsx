import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Dropdown as Dropdown1 } from "@atrilabs/react-component-manifests/src/manifests/Dropdown/Dropdown.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv12Cb, useFlex5Cb, useDiv13Cb, useDiv14Cb, useImage8Cb, useDropdown5Cb, useTextBox15Cb, useTextBox16Cb, useTextBox17Cb, useImage9Cb } from "../page-cbs/Homepage";
import "../page-css/Homepage.css"

export default function Homepage() {
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

  const Div12Props = useStore((state)=>state["Homepage"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Homepage"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Flex5Props = useStore((state)=>state["Homepage"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Homepage"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Div13Props = useStore((state)=>state["Homepage"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Homepage"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Homepage"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Homepage"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Image8Props = useStore((state)=>state["Homepage"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Homepage"]["Image8"]);
const Image8Cb = useImage8Cb()
const Dropdown5Props = useStore((state)=>state["Homepage"]["Dropdown5"]);
const Dropdown5IoProps = useIoStore((state)=>state["Homepage"]["Dropdown5"]);
const Dropdown5Cb = useDropdown5Cb()
const TextBox15Props = useStore((state)=>state["Homepage"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Homepage"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox16Props = useStore((state)=>state["Homepage"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Homepage"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Homepage"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Homepage"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image9Props = useStore((state)=>state["Homepage"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Homepage"]["Image9"]);
const Image9Cb = useImage9Cb()

  return (<>
  <Div1 className="p-Homepage Div12" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Flex1 className="p-Homepage Flex5" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Div1 className="p-Homepage Div14" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Image1 className="p-Homepage Image9" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Div1>
<Div1 className="p-Homepage Div13" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox1 className="p-Homepage TextBox17" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox1 className="p-Homepage TextBox16" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<TextBox1 className="p-Homepage TextBox15" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Dropdown1 className="p-Homepage Dropdown5" {...Dropdown5Props} {...Dropdown5Cb} {...Dropdown5IoProps}/>
<Image1 className="p-Homepage Image8" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Div1>
</Flex1>
</Div1>
  </>);
}
