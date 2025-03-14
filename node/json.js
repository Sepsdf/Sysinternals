// var a = {
//     item: "",
//     name: "",
//     des: ""
// }
// console.log(a)

// var list = []
// document.querySelectorAll('li.tree-item[aria-setsize="9"]').forEach(c =>{
//     var itemName = c.querySelectorAll("span.tree-expander")[0].innerText;
//     var values = [];
//     c.querySelectorAll("ul.tree-group li[role='none']")
//     .forEach(d => values.push(d.innerText));
//     list.push(
//         {
//             "itemName": itemName,
//             "values": values
//         }
//     )
// })
// list

var json = '[{"itemName":"文件和磁盘实用工具","values":["文件和磁盘实用工具","AccessChk","AccessEnum","CacheSet","Contig","Disk2vhd","DiskExt","DiskMon","磁盘使用情况","DiskView","EFSDump","LDMDump","MoveFile","NTFSInfo","PendMoves","RegMon","SDelete","Sigcheck","流","同步","VolumeID"]},{"itemName":"网络实用工具","values":["网络实用工具","Active Directory Explorer","了解 Active Directory","AdRestore","PipeList","PsFile","PsPing","ShareEnum","TCPView","Whois"]},{"itemName":"进程实用工具","values":["进程实用工具","AutoRuns","Handle","ListDLLs","Portmon","ProcDump","进程资源管理器","进程监视器","PsExec","PsGetSid","PsKill","PsList","PsService","PsSuspend","PsTools","ShellRunas","VMMap"]},{"itemName":"安全实用工具","values":["安全实用工具","Autologon","LogonSessions","NewSID","PsLoggedOn","PsLogList","RootkitRevealer","Sysmon"]},{"itemName":"系统信息","values":["系统信息","ClockRes","Coreinfo","LiveKd","LoadOrder","ProcFeatures","PsInfo","RAMMap","WinObj"]},{"itemName":"其他","values":["其他","BgInfo","蓝屏屏幕保护程序","CpuStres","Ctrl2Cap","DebugView","台式机","Hex2dec","NotMyFault","PsPasswd","PsShutdown","RDCMan","RegDelNull","注册表使用情况","Reghide","RegJump","字符串","Testlimit","ZoomIt"]}]';
var a = JSON.parse(json)
var b=  0;
a.array.forEach(c => {
    b += c.values.length
});
console.log(b)