const ramadanData = [

{date:"2026-02-18", roza:1, sehri:"05:53", sunrise:"07:03", dhuhr:"12:35", asr:"04:26", iftar:"06:05", isha:"07:17"},
{date:"2026-02-19", roza:2, sehri:"05:51", sunrise:"07:02", dhuhr:"12:34", asr:"04:27", iftar:"06:06", isha:"07:17"},
{date:"2026-02-20", roza:3, sehri:"05:50", sunrise:"07:01", dhuhr:"12:34", asr:"04:27", iftar:"06:07", isha:"07:18"},
{date:"2026-02-21", roza:4, sehri:"05:49", sunrise:"07:00", dhuhr:"12:34", asr:"04:28", iftar:"06:08", isha:"07:19"},
{date:"2026-02-22", roza:5, sehri:"05:48", sunrise:"06:58", dhuhr:"12:34", asr:"04:29", iftar:"06:09", isha:"07:20"},
{date:"2026-02-23", roza:6, sehri:"05:47", sunrise:"06:57", dhuhr:"12:34", asr:"04:30", iftar:"06:10", isha:"07:21"},
{date:"2026-02-24", roza:7, sehri:"05:46", sunrise:"06:56", dhuhr:"12:34", asr:"04:33", iftar:"06:11", isha:"07:22"},
{date:"2026-02-25", roza:8, sehri:"05:44", sunrise:"06:55", dhuhr:"12:34", asr:"04:32", iftar:"06:12", isha:"07:23"},
{date:"2026-02-26", roza:9, sehri:"05:43", sunrise:"06:53", dhuhr:"12:33", asr:"04:33", iftar:"06:13", isha:"07:24"},
{date:"2026-02-27", roza:10, sehri:"05:42", sunrise:"06:52", dhuhr:"12:33", asr:"04:33", iftar:"06:14", isha:"07:25"},
{date:"2026-02-28", roza:11, sehri:"05:41", sunrise:"06:51", dhuhr:"12:33", asr:"04:34", iftar:"06:15", isha:"07:26"},
{date:"2026-03-01", roza:12, sehri:"05:39", sunrise:"06:49", dhuhr:"12:33", asr:"04:36", iftar:"06:17", isha:"07:27"},
{date:"2026-03-02", roza:13, sehri:"05:38", sunrise:"06:48", dhuhr:"12:33", asr:"04:36", iftar:"06:17", isha:"07:27"},
{date:"2026-03-03", roza:14, sehri:"05:37", sunrise:"06:47", dhuhr:"12:33", asr:"04:37", iftar:"06:18", isha:"07:28"},
{date:"2026-03-04", roza:15, sehri:"05:35", sunrise:"06:45", dhuhr:"12:32", asr:"04:37", iftar:"06:19", isha:"07:29"},
{date:"2026-03-05", roza:16, sehri:"05:34", sunrise:"06:44", dhuhr:"12:32", asr:"04:38", iftar:"06:20", isha:"07:30"},
{date:"2026-03-06", roza:17, sehri:"05:33", sunrise:"06:43", dhuhr:"12:32", asr:"04:39", iftar:"06:20", isha:"07:31"},
{date:"2026-03-07", roza:18, sehri:"05:31", sunrise:"06:41", dhuhr:"12:32", asr:"04:39", iftar:"06:21", isha:"07:32"},
{date:"2026-03-08", roza:19, sehri:"06:30", sunrise:"07:40", dhuhr:"01:31", asr:"05:40", iftar:"07:22", isha:"08:33"},
{date:"2026-03-09", roza:20, sehri:"06:29", sunrise:"07:39", dhuhr:"01:31", asr:"05:41", iftar:"07:23", isha:"08:34"},
{date:"2026-03-10", roza:21, sehri:"06:27", sunrise:"07:37", dhuhr:"01:31", asr:"05:42", iftar:"07:24", isha:"08:35"},
{date:"2026-03-11", roza:22, sehri:"06:26", sunrise:"07:36", dhuhr:"01:31", asr:"05:42", iftar:"07:25", isha:"08:35"},
{date:"2026-03-12", roza:23, sehri:"06:24", sunrise:"07:34", dhuhr:"01:30", asr:"05:43", iftar:"07:26", isha:"08:36"},
{date:"2026-03-13", roza:24, sehri:"06:24", sunrise:"07:34", dhuhr:"01:30", asr:"05:43", iftar:"07:26", isha:"08:36"},
{date:"2026-03-14", roza:25, sehri:"06:23", sunrise:"07:33", dhuhr:"01:30", asr:"05:43", iftar:"07:27", isha:"08:37"},
{date:"2026-03-15", roza:26, sehri:"06:21", sunrise:"07:32", dhuhr:"01:30", asr:"05:44", iftar:"07:28", isha:"08:38"},
{date:"2026-03-16", roza:27, sehri:"06:20", sunrise:"07:30", dhuhr:"01:29", asr:"05:45", iftar:"07:28", isha:"08:39"},
{date:"2026-03-17", roza:28, sehri:"06:18", sunrise:"07:29", dhuhr:"01:29", asr:"05:45", iftar:"07:29", isha:"08:40"},
{date:"2026-03-18", roza:29, sehri:"06:17", sunrise:"07:27", dhuhr:"01:29", asr:"05:46", iftar:"07:30", isha:"08:41"},
{date:"2026-03-19", roza:30, sehri:"06:15", sunrise:"07:26", dhuhr:"01:29", asr:"05:47", iftar:"07:31", isha:"08:42"}

];

function getTodayRamadanData(){
const today=new Date();
return ramadanData.find(d =>
new Date(d.date).toDateString()===today.toDateString()
);
}
