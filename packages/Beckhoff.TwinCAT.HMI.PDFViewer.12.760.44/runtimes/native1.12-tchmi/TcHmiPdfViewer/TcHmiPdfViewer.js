var TcHmi;!function(TcHmi){!function(Controls){!function(Beckhoff){class TcHmiPdfViewer extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__viewerPath=tchmi_path(TcHmi.Environment.getControlBasePathEx(this)+"/../Lib/pdfjs/web/viewer.html")}__previnit(){if(this.__elementTemplateRoot=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiPdfViewer-template"),this.__elementFrame=this.__elementTemplateRoot.find(".TcHmi_Controls_Beckhoff_TcHmiPdfViewer-template-iframe"),0===this.__elementTemplateRoot.length||0===this.__elementFrame.length)throw new Error("Invalid Template.html");super.__previnit()}__init(){super.__init(),this.__destroyOnLocaleChanged&&(this.__destroyOnLocaleChanged(),this.__destroyOnLocaleChanged=null),this.__destroyOnLocaleChanged=TcHmi.EventProvider.register("onLocaleChanged",this.__onLocaleChanged()),this.__processLocaleOverride(),this.__processViewerUpdate()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){if(this.__keepAlive)return;this.__destroyOnLocaleChanged&&(this.__destroyOnLocaleChanged(),this.__destroyOnLocaleChanged=null);this.__elementFrame[0].onload=null,super.destroy()}__onLocaleChanged(){return()=>{this.__processLocaleOverride()}}__processLocaleOverride(){const iframeObj=this.__elementFrame[0];let locale=TcHmi.Locale.get();if(locale){let proc=function(){let localeFromIframe=iframeObj.contentWindow?.localStorage.getItem("TcHmi.Controls.Beckhoff.TcHmiPdfViewer.localeOverride");localeFromIframe!==locale&&(iframeObj.contentWindow?.localStorage.setItem("TcHmi.Controls.Beckhoff.TcHmiPdfViewer.localeOverride",locale),iframeObj.src&&iframeObj.contentWindow?.location.reload())};iframeObj.contentWindow?proc():iframeObj.onload=function(){proc(),iframeObj.onload=null}}}__processFileAbsolute(){if(!this.__file)return void(this.__fileAbsolute=null);let path="";window.location.pathname&&(path=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/"))),this.__fileAbsolute=window.location.protocol+"//"+window.location.host+"/"+tchmi_path(path+"/"+this.__file)}__processViewerUpdate(){if(!this.__attributesInitialized)return;let fileUrl;fileUrl=TCHMI_DESIGNER?"":this.__fileAbsolute??"";const hashArray=[];hashArray.push("zoom="+(this.__zoom??"auto")),hashArray.push("pagemode="+(this.__pageMode??"none")),!TCHMI_DESIGNER&&this.__namedDestination&&hashArray.push("nameddest="+this.__namedDestination),!TCHMI_DESIGNER&&this.__page&&hashArray.push("page="+this.__page);this.__elementFrame[0].src=this.__viewerPath+"?file="+fileUrl+"#"+hashArray.join("&")}setFile(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("File")),convertedValue!==this.__file&&(this.__file=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"File"}),this.__processFile())}getFile(){return this.__file}__processFile(){this.__processFileAbsolute(),this.__processViewerUpdate()}setPage(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Page")),convertedValue!==this.__page&&(this.__page=null!==convertedValue?Math.floor(convertedValue):1,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Page"}),this.__processPage())}getPage(){return this.__file}__processPage(){this.__processViewerUpdate()}setNamedDestination(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("NamedDestination")),convertedValue!==this.__namedDestination&&(this.__namedDestination=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"NamedDestination"}),this.__processNamedDestination())}getNamedDestination(){return this.__namedDestination}__processNamedDestination(){this.__processViewerUpdate()}setZoom(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Zoom")),convertedValue!==this.__zoom&&(this.__zoom=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Zoom"}),this.__processZoom())}getZoom(){return this.__zoom}__processZoom(){this.__processViewerUpdate()}setPageMode(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("PageMode")),convertedValue!==this.__pageMode&&(this.__pageMode=null===convertedValue||"none"!==convertedValue&&"thumbs"!==convertedValue&&"bookmarks"!==convertedValue&&"attachments"!==convertedValue?"none":convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"PageMode"}),this.__processZoom())}getPageMode(){return this.__pageMode}__processPageMode(){this.__processViewerUpdate()}}Beckhoff.TcHmiPdfViewer=TcHmiPdfViewer}(Controls.Beckhoff||(Controls.Beckhoff={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiPdfViewer","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiPdfViewer);