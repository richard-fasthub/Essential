var Reg = "HKCU\\SOFTWARE\\drpsu\\";

var WshShell = new ActiveXObject("WScript.Shell");
var WshEnv = WshShell.Environment("PROCESS");
var AppData = WshShell.SpecialFolders("AppData");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var drpPath = WshShell.SpecialFolders("AppData") + '\\DRPSu';
var softPath = WshShell.SpecialFolders("AppData") + '\\DRPSu\\PROGRAMS';
var locator = new ActiveXObject("WbemScripting.SWbemLocator");
var objWMIService = locator.ConnectServer(null, "root\\cimv2");

//Fix NTFS zone checks alerts
try {
    WshShell.Environment("PROCESS")("SEE_MASK_NOZONECHECKS") = 1;
} catch(e) {}

//Include other JavaScript or CSS
function inc(filename){
	var head = document.getElementsByTagName('head').item(0);
	if (fso.GetFileName(filename).split('.')[1].toLowerCase()=='css'){
		script=document.createElement("link");
		script.setAttribute("rel", "stylesheet");
		script.setAttribute("type", "text/css");
		script.setAttribute("href", filename);
	}
	else {
		script = document.createElement('script');
		script.src = filename;
		script.type = 'text/javascript';
	}

	if (typeof script!="undefined"){
		head.appendChild(script);
	}
}

//var logFolder = WshEnv("WINDIR")+'\\Logs\\DRPLog\\';
var logFolder = AppData+'\\DRPSu\\Logs\\';
if (!fso.FolderExists(AppData+'\\DRPSu')) { fso.CreateFolder(AppData+'\\DRPSu'); }
if (!fso.FolderExists(AppData+'\\DRPSu\\Logs')) { fso.CreateFolder(AppData+'\\DRPSu\\Logs'); }
if (!fso.FolderExists(AppData+'\\DRPSu\\DRIVERS')) { fso.CreateFolder(AppData+'\\DRPSu\\DRIVERS'); }
if (!fso.FolderExists(AppData+'\\DRPSu\\PROGRAMS')) { fso.CreateFolder(AppData+'\\DRPSu\\PROGRAMS'); }

// Read registry
// ToDo: Придумать авто-тесты!!!
function RegRead(key){

	key = key.replace('HKEY_LOCAL_MACHINE\\','HKLM\\');
	key = key.replace('HKEY_CURRENT_USER\\','HKCU\\');

	ret = RegRead32(key);

	if ((!ret) && (key.indexOf('\\SOFTWARE\\Microsoft\\') != -1)) {
		t_key = key.replace('\\SOFTWARE\\Microsoft\\','\\SOFTWARE\\Wow6432Node\\Microsoft\\');

		ret = RegRead32(key);
	}

	if (!ret){
		ret = RegRead64(key);
	}

	return ret;

}

function RegRead32(key) {
	//lf('RegRead');
	var ret = "";
	try { ret = WshShell.RegRead(key); }
	catch(e) { ret = ""; }
	return ret;
}


function RegRead64(key) {
	var HKEY_LOCAL_MACHINE = 0x80000002;
	var HKEY_CURRENT_USER = 0x80000001;

	var context = new ActiveXObject("WbemScripting.SWbemNamedValueSet");
	context.Add("__ProviderArchitecture", 64);
	context.Add("__RequiredArchitecture", true);
	var locator = new ActiveXObject("Wbemscripting.SWbemLocator");
	var wbem = locator.ConnectServer(null ,"root\\default", null, null, null, null, null, context);
	var StdRegProv = wbem.Get("StdRegProv");
	var method = StdRegProv.Methods_.Item("GetStringValue");
	var inParameters = method.InParameters.SpawnInstance_();

	if (key.indexOf('HKLM\\') == 0){
		inParameters.hDefKey = HKEY_LOCAL_MACHINE;
	}
	else if (key.indexOf('HKCU\\') == 0){
		inParameters.hDefKey = HKEY_CURRENT_USER;
	}

	inParameters.sSubKeyName = key.substring(5);
	inParameters.sValueName = "";
	var outParameters = StdRegProv.ExecMethod_("GetStringValue", inParameters, 0, context);
	//alert(outParameters.sValue);

	return outParameters.sValue;
}

// Open url
function goToUrl(url){
	log("Opening "+url);
	try {
		defBrowser = RegRead("HKCU\\SOFTWARE\\Clients\\StartMenuInternet\\");
		if (!defBrowser) defBrowser = RegRead("HKLM\\SOFTWARE\\Clients\\StartMenuInternet\\");
		runComm = RegRead("HKLM\\SOFTWARE\\Clients\\StartMenuInternet\\" + defBrowser + "\\shell\\open\\command\\");
		runComm = runComm.replace(/"/ig,'');
		if (runComm)
			WshShell.Run('"' + runComm + '" ' + '"' + url + '"',1,false);
		else
			window.open(url);
	}
	catch(e) {
		log("Failed to open "+url);
		WshShell.Run('rundll32 url.dll,FileProtocolHandler '+url,1,false);
	}
	return false;
}

//Modify function 'WshShell.Run'
//Can run x64 programms
function winRun(src,hideMode,wait,bit64){
    if (!src) { return false; }
    if (!hideMode) { hideMode=false; }
    if (!wait) { wait=false; }
    hideMode=(hideMode?'0':'1');
    wait=!(wait?false:true);

    if (bit64&&is64) {
        hideMode=true;
        wait=false;
        src = '"%windir%\\sysnative\\cmd.exe" /C '+src;
    }

    return WshShell.Run(src,hideMode,wait);
}
