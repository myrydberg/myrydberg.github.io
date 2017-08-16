var freqData=[
{skill:'problemsolvning',freq:{low:1619, mid:167, high:1063}}
,{skill:'programming',freq:{low:1619, mid:167, high:1063}}
,{skill:'creative',freq:{low:4498, mid:3852, high:942}}
];

var myData=[
{skill:'a',freq:{problemsolving:5, programming:5, creative:5}}
,{skill:'b',freq:{problemsolving:5, programming:0, creative:5}}
,{skill:'c',freq:{problemsolving:0, programming:5, creative:5}}
,{skill:'d',freq:{problemsolving:5, programming:5, creative:5}}
];

dashboard2('#dashboard',freqData, myData);