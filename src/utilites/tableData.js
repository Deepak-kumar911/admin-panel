const tableData = [
    {name:"airi satou", position:"accountant",office:"tokyo",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"angelica ramos", position:"chief executive officer (CEO)",office:"tokyo",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"ashton cox", position:"junior technical author",office:"tokyo",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"fride", position:"accountant",office:"tokyo",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou1", position:"accountant",office:"tokyo",age:31,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou2", position:"accountant",office:"tokyo",age:32,"start date" : "2008/10/28",salary:"62700"},
    {name:"airi satou3", position:"accountant",office:"tokyo",age:33,"start date" : "2008/09/28",salary:"12700"},
    {name:"airi satou4", position:"accountant",office:"noida",age:34,"start date" : "2008/08/28",salary:"62600"},
    {name:"airi satou5", position:"accountant",office:"tokyo",age:35,"start date" : "2008/07/28",salary:"162800"},
    {name:"airi satou6", position:"accountant",office:"noida",age:36,"start date" : "2008/11/28",salary:"162900"},
    {name:"airi satou7", position:"accountant",office:"tokyo",age:37,"start date" : "2008/11/28",salary:"182700"},
    {name:"airi satou8", position:"accountant",office:"tokyo",age:38,"start date" : "2008/11/28",salary:"362700"},
    {name:"airi satou9", position:"accountant",office:"tokyo",age:39,"start date" : "2008/11/28",salary:"462100"},
    {name:"airi satou10", position:"accountant",office:"noida",age:40,"start date" : "2010/07/28",salary:"662900"},
    {name:"airi satou11", position:"accountant",office:"tokyo",age:41,"start date" : "2010/07/28",salary:"862800"},
    {name:"airi satou12", position:"accountant",office:"tokyo",age:42,"start date" : "2010/07/28",salary:"165700"},
    {name:"airi satou13", position:"accountant",office:"noida",age:43,"start date" : "2010/07/28",salary:"182600"},
    {name:"airi satou14", position:"developer",office:"noida",age:44,"start date" : "2010/11/28",salary:"122500"},
    {name:"airi satou15", position:"developer",office:"tokyo",age:45,"start date" : "2008/11/28",salary:"189400"},
    {name:"airi satou16", position:"developer",office:"delhi",age:46,"start date" : "2008/11/28",salary:"166300"},
    {name:"airi satou17", position:"developer",office:"delhi",age:47,"start date" : "2008/11/28",salary:"164200"},
    {name:"airi satou18", position:"developer",office:"tokyo",age:48,"start date" : "2008/11/28",salary:"165100"},
    {name:"airi satou19", position:"developer",office:"tokyo",age:49,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou20", position:"accountant",office:"tokyo",age:50,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou21", position:"accountant",office:"delhi",age:30,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou22", position:"accountant",office:"tokyo",age:35,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou23", position:"accountant",office:"delhi",age:36,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou24", position:"accountant",office:"delhi",age:38,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou25", position:"accountant",office:"delhi",age:21,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou26", position:"accountant",office:"tokyo",age:22,"start date" : "2009/11/28",salary:"162700"},
    {name:"airi satou27", position:"designer",office:"tokyo",age:23,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou28", position:"designer",office:"tokyo",age:24,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou29", position:"designer",office:"tokyo",age:25,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou30", position:"designer",office:"tokyo",age:26,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou31", position:"designer",office:"tokyo",age:27,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou32", position:"designer",office:"tokyo",age:28,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou33", position:"designer",office:"tokyo",age:29,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou34", position:"designer",office:"tokyo",age:30,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou35", position:"accountant",office:"tokyo",age:31,"start date" : "2015/11/28",salary:"162700"},
    {name:"airi satou36", position:"accountant",office:"tokyo",age:32,"start date" : "2015/11/28",salary:"162700"},
    {name:"airi satou37", position:"accountant",office:"tokyo",age:33,"start date" : "2015/11/28",salary:"162700"},
    {name:"airi satou38", position:"accountant",office:"tokyo",age:34,"start date" : "2015/11/28",salary:"162700"},
    {name:"airi satou39", position:"accountant",office:"tokyo",age:35,"start date" : "2015/11/28",salary:"162700"},
    {name:"airi satou40", position:"accountant",office:"noaid",age:36,"start date" : "2015/11/28",salary:"162700"},
    {name:"airi satou", position:"manager",office:"nodia",age:37,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"manager",office:"gurgoan",age:38,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"manager",office:"noida",age:39,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"manager",office:"new delhi",age:40,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"manager",office:"gurgaon",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"manager",office:"gurgaon",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"HR",office:"gurgaon",age:33,"start date" : "2018/11/28",salary:"162700"},
    {name:"airi satou", position:"HR",office:"gurgaon",age:33,"start date" : "2018/11/28",salary:"162700"},
    {name:"airi satou", position:"HR",office:"gurgaon",age:33,"start date" : "2018/11/28",salary:"162700"},
    {name:"airi satou", position:"HR",office:"gurgaon",age:33,"start date" : "2018/11/28",salary:"162700"},
    {name:"airi satou", position:"accountant",office:"gurgaon",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"accountant",office:"gurgaon",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"accountant",office:"gurgaon",age:33,"start date" : "2008/11/28",salary:"162700"},
    {name:"airi satou", position:"accountant",office:"gurgaon",age:33,"start date" : "2008/11/28",salary:"162700"},



];

export default tableData;